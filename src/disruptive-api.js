let base64 = require("base-64");

var clientId = "c5r5s6uk2e8g009p2nvg";
var clientSecret = "19a14573c77e4337aabf91f54647fd51";

let headers = new Headers();
headers.append('Authorization', 'Basic ' + base64.encode(clientId + ":" + clientSecret));

export const getProjects = async () => {
    var res = await fetch("https://api.disruptive-technologies.com/v2/projects", {
        method: "GET",
        headers: headers
    });

    var json = await res.json();

    return json;
}
