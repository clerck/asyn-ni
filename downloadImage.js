var http = require("http");

var downloadImage = function(data, callback){
    if(!data.url) return callback(new Error("url inexistant"));
    console.log("start : ", data.url);

    http.get(data.url, function(response){
        var body = "";
        response.on('data', function(d){
            body +=d;
            console.log(d.length);
        });
        response.on('end', function(){
            console.log("finish", data.url, "size : "+body.length);
            return callback(null, body);
        });
    }).on('error', function(e){
        console.log("got error : "+ e.message);
    });
}

module.exports = downloadImage;