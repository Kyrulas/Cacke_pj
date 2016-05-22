var fs = require('fs');
exports.rout = function(app) {
  app.get("/",function(req,res){
    require("./controllers/main").get(req, res);
  });
  
  app.post("/addOrder",function(req,res){
  	require("./controllers/order").post(req,res);
  })
  app.get("*",function(req,res){
    res.writeHead(404);
    res.write("Oopps Not Found");
    res.end();
  })
};
