var orderController = require('./controllers/order');
var mainController = require("./controllers/main");

exports.rout = function(app) {
  app.get("/",function(req,res){
    mainController.get(req, res);
  }); 
  app.post("/addOrder",function(req,res){
  	orderController.addOrder(req,res);
  })

  app.get('/orders',function(req,res){
    orderController.getAll(req,res);
  })

  app.get('/deleteOrder/:id', function(req,res){
    orderController.deleteOrder(req,res);
  })

  app.get('/changeStatus/:id/:status', function(req,res){
    orderController.changeStatus(req,res);
  })

  app.get("*",function(req,res){
    res.writeHead(404);
    res.write("Oopps Not Found");
    res.end();
  })
};
