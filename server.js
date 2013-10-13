var 
	express 		= require('express');
	app 			= express(),

	expressLayouts 	= require('express-ejs-layouts')
;

app.configure(function () {

	app.use(express.limit('10mb'));

	app.set('views', __dirname + '/views');
    
    app.set('view engine', 'ejs');
    app.set('layout', 'layout'); //default layout
    
    app.use(express.static(__dirname + '/public'));

    app.use(expressLayouts);

});

app.get('/', function(req, res){

	res.render('index', { layout: 'layout' });

});

app.listen(3000);