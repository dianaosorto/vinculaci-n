// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
  pushState: false
},

    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/vitalechero-info/',
    	url: 'vitalechero-info.html',
    	name: 'vitalechero-info',
  		},
		{
		path: '/akstress-info/',
    	url: 'akstress-info.html',
    	name: 'akstress-info',
  		},
		{
		path: '/aprax-info/',
    	url: 'aprax-info.html',
    	name: 'aprax-info',
  		},
		{
		path: '/prosel-info/',
    	url: 'prosel-info.html',
    	name: 'prosel-info',
  		},
		{
		path: '/ketodrog-info/',
    	url: 'ketodrog-info.html',
    	name: 'ketodrog-info',
  		},
		{
		path: '/products/',
    	url: 'products.html',
    	name: 'products',
  		},
		{
		path: '/aliponedora-info/',
    	url: 'aliponedora-info.html',
    	name: 'aliponedora-info',
  		},
		{
		path: '/nosotros/',
    	url: 'nosotros.html',
    	name: 'nosotros',
  		},
		
	],
	dialog: {
		title: 'Diseño Web App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
		
		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
		
	});
	
	
	
});





