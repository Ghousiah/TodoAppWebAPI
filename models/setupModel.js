var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var newSchema=new Schema({
	name:String,
	todo:String,
	isDone:Boolean
});

var Todos=mongoose.model('Todos',newSchema);

module.exports=Todos;