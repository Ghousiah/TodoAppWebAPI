var setupModel=require('../models/setupModel');

module.exports=function(app){
	app.get('/api/setupTodos',function(req,res){
		var startTodos=[
			{	
				name:'test',
				todo:'Buy Milk',
				isDone:'false'
			},
			{	
				name:'test',
				todo:'Buy Corn',
				isDone:'false'
			},
			{	
				name:'test',
				todo:'learn Node',
				isDone:'true'
			}	
		];

		setupModel.create(startTodos,function(err,result){
			if(err) throw err;
			
			res.send(result);
		});
	});
}