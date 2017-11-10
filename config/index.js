var config=require('./config');

module.exports={
	getdbconnectionstring:function(){
		return 'mongodb://'+config.name+':'+config.pwd+'@ds127375.mlab.com:27375/nodetodo';
	}
}