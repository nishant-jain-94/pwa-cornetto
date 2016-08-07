
angular.module('app', ['ngMaterial','app.navbar','app.story'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('white', {
    '50': 'ffffff',
    '100': 'ffffff',
    '200': 'ffffff',
    '300': 'ffffff',
    '400': 'ffffff',
    '500': 'ffffff',
    '600': 'ffffff',
    '700': 'ffffff',
    '800': 'ffffff',
    '900': 'ffffff',
    'A100': 'ffffff',
    'A200': 'ffffff',
    'A400': 'ffffff',
    'A700': 'ffffff',
    'contrastDefaultColor': 'dark'
  });

  $mdThemingProvider.theme('default')
    // .primaryPalette('white')
})
.run(function() {
    console.log('running run')
    if('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/service-worker.js',{insecure: true})
            .then(function(){
                console.log('Service Registered');
            })
    }
})
