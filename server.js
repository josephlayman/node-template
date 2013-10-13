var 
	express 		= require('express');
	app 			= express(),

	expressLayouts 	= require('express-ejs-layouts'),
	stylus 			= require('stylus')
;

app.configure(function () {

	app.use(express.limit('10mb'));

	app.set('views', __dirname + '/views');
    
    app.set('view engine', 'ejs');
    app.set('layout', 'layout'); //default layout
    
    app.use(expressLayouts);

    app.use(stylus.middleware({
  		src: __dirname + '/public',
        dest: __dirname + '/public'
  	}));

  	app.use(express.static(__dirname + '/public'));

});

app.get('/', function(req, res){

	res.render('index');

});

app.listen(3000);