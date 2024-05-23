/*var express=require('express');

var app=express();

app.get('/',function(req,res){
	res.send('this is homepage');
});

app.get('/contact',function(req,res){
     res.send('this is contact page');
});

app.get('/profile/:name',function(req,res){
	res.send('You requested to see a profile with the name of '+ req.params.name);
});


app.listen(3000);
*/


var express=require('express'),
service = require('./component/service');

var app=express();


app.get('/',function(req,res){
	service.fun();
	res.json('test');
});

app.get('/contact',function(req,res){
     res.sendFile(__dirname+'/contact.html');
});

app.get('/profile/:name',function(req,res){
	var data={age : 29 , job : 'ninja',hobbies : ['fighting','Eating','Visiting Place'] };
	//res.send('profile');
	res.render('profile',{person: req.params.name ,data:data } );
});


app.listen(3000);
console.log('server running on 3000 port');
