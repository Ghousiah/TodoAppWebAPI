var express=require('express');
var mongoose=require('mongoose');
var config=require('./config');
var todoController=require('./controllers/todoController');
var apiController=require('./controllers/apiController');

var app=express();
var port=process.env.PORT||3000;

mongoose.connect(config.getdbconnectionstring());

app.get('/',function(req,res){
	res.send('hello');
});

todoController(app);
apiController(app);

app.listen(port);