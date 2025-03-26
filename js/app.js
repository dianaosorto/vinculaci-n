var $$ = Dom7;

var app = new Framework7({
  id: 'com.app',
  root: '#app',
  theme: 'md',
  view: {
    pushState: false // ¡Bien para GitHub Pages!
  },
  cache: false,
  cacheDuration: 0,
  modalTitle: 'Diseño Web App',
  panel: {
    swipe: true,
  },
  routes: [
    {
      path: '/index.html',
      url: 'index.html',
      name: 'home',
    },
    {
      path: '/products.html',
      url: 'products.html',
      name: 'products',
    },
    {
      path: '/nosotros.html',
      url: 'nosotros.html',
      name: 'nosotros',
    },
    {
      path: '/perfil.html',
      url: 'perfil.html',
      name: 'perfil',
    },
    {
      path: '/contactenos.html',
      url: 'contactenos.html',
      name: 'contactenos',
    },
    {
      path: '/carrito.html',
      url: 'carrito.html',
      name: 'carrito',
    },
    {
      path: '/vitalechero-info.html',
      url: 'vitalechero-info.html',
      name: 'vitalechero-info',
    },
    {
      path: '/akstress-info.html',
      url: 'akstress-info.html',
      name: 'akstress-info',
    },
    {
      path: '/aprax-info.html',
      url: 'aprax-info.html',
      name: 'aprax-info',
    },
    {
      path: '/prosel-info.html',
      url: 'prosel-info.html',
      name: 'prosel-info',
    },
    {
      path: '/ketodrog-info.html',
      url: 'ketodrog-info.html',
      name: 'ketodrog-info',
    },
    {
      path: '/aliponedora-info.html',
      url: 'aliponedora-info.html',
      name: 'aliponedora-info',
    }
  ],
  dialog: {
    title: 'Diseño Web App',
    buttonOk: 'Aceptar',
  },
  popup: {
    closeOnEscape: true,
    backdrop: false
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

// Login
$$('#btnLogin').on('click', function (e) {
  e.preventDefault();
  var $valid = $$('#form-login')[0].checkValidity();
  if ($valid) {
    $$('#form-login').trigger('reset');	
    app.loginScreen.close('#modal-login');
    app.dialog.alert('¡ Bienvenido a la APP !');
  }
});

// Checkout
$$(document).on('click', '#btnCheckout', function (e) {
  e.preventDefault();
  app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
    var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      text: "Your order has been received.",
      closeTimeout: 3000,
    });
    notification.open();
  });
});
