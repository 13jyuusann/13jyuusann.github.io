// Hitokoto
const hitokotoElement = document.getElementById("hitokoto");

fetch("https://v1.hitokoto.cn?encode=json")
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            hitokotoElement.innerHTML = "Hitokoto加载失败惹";
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
            const hitokotoElement = document.getElementById("hitokoto");
            hitokotoElement.innerHTML = `${json.hitokoto}`;
            hitokotoElement.href = `https://hitokoto.cn?uuid=${json.uuid}`;
            hitokotoElement.target = "_blank";
            hitokotoElement.title = `——${json.from_who}「${json.from}」`;
        }
    });