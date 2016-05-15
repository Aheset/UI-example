var routerApp = angular.module("routerApp", ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
        url: '/home',
        templateUrl: '/partials/home.html'
    })
        .state('about', {
        url: '/about',
        templateUrl: '/partials/about.html'

    })

    // nested list
    .state('home.input', {
        url: '/input',
        templateUrl: '/partials/home-input.html'
        
    })

    .state('home.api', {
        url: '/api',
        templateUrl: '/partials/home-api.html'
        
        
    })

    // nested list with just some random string data
    
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
});