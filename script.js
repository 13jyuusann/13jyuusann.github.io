// Hitokoto
fetch("https://v1.hitokoto.cn?encode=json")
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            document.getElementById("hitokoto").innerHTML = "Hitokoto加载失败惹";
        }
    })
    .then(json => {
        if (json) {
            function replaceNullWithEmpty(obj) {    // 遍历 JSON 将 NULL 替换为空值
                for (let key in obj) {
                    if (obj[key] === null) {
                        obj[key] = "";
                    }
                }
            }
            replaceNullWithEmpty(json);
            document.getElementById("hitokoto").innerHTML = json.hitokoto;
            document.getElementById("hitokoto").href = "https://hitokoto.cn?uuid=" + json.uuid;
            document.getElementById("hitokoto").target = "_blank";
            document.getElementById("hitokoto").title = "——" + json.from_who + "「" + json.from + "」";
        }
    });