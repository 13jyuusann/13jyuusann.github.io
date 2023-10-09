// Hitokoto
var httpRequest = new XMLHttpRequest();
    var url = "https://v1.hitokoto.cn?encode=json";
    httpRequest.open('GET', url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = JSON.parse(httpRequest.responseText);
            function replaceNullWithEmpty(obj) {    // 遍历 JSON 将 NULL 替换为空值
                for (let key in obj) {
                    if (obj[key] === null) {
                        obj[key] = "";
                    } else if (typeof obj[key] === 'object') {
                        replaceNullWithEmpty(obj[key]);
                    }
                }
            }
            replaceNullWithEmpty(json);
            document.getElementById("hitokoto").innerHTML = json.hitokoto;
            document.getElementById("hitokoto").href = "https://hitokoto.cn?uuid=" + json.uuid;
            document.getElementById("hitokoto").target = "_blank";
            document.getElementById("hitokoto").title = "——" + json.from_who + "「" + json.from + "」";
        }
    };