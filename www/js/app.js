var $$=Dom7;

var app = new Framework7({
  // App root element
  root: '#app',
  //theme
  theme: 'ios',
  // App Name
  name: 'Mi Horario',
  // App id
  id: 'com.myapp.mihorario',
  // Enable swipe panel
  statusbar: {
    enabled:true,
    materialBackgroundColor:'#007aff',
 },

  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
