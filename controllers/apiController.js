var Todos=require('../models/setupModel');
var bodyParser=require('body-parser');

module.exports=function(app){
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));

	app.get('/api/todos/:name',function(req,res){
		Todos.find({name:req.params.name},function(err,result){
			if(err) throw err;

			res.send(result);
		});
	});

	app.get('/api/todo/:id',function(req,res){
		Todos.findById({_id:req.params.id},function(err,result){
			if(err) throw err;
			
			res.send(result);
		});
	});

	app.post('/api/todo',function(req,res){
		if(req.body.id){
			Todos.findByIdAndUpdate(req.body.id,
			{todo:req.body.todo,
			isDone:req.body.isDone},
				function(err,result){
				if(err) throw err;

				res.send('Success: '+result);
			});
		}
		else{
			var newTodo=Todos({
				name:'test',
				todo:req.body.todo,
				isDone:req.body.isDone
			});
			newTodo.save(function(err,result){
				if(err) throw err;

				res.send('Success: '+result);
			});
		}
	});

	app.delete('/api/todo',function(req,res){
		Todos.findByIdAndRemove(req.body.id,function(err){
			if(err) throw err;

			res.send("Success");
		});
	});
}