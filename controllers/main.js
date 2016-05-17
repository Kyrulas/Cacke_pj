var fs = require("fs");
var page = fs.readFileSync("views/static/index.html");
exports.get = function(req, res){
   
    res.writeHead(200, {"Content-type": "text/html"});
    res.write(page);
    res.end();
    
}
