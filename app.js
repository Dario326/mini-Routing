angular.module('miniRouting', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home/hometmpl.html',
            controller: 'homeCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'settings/settingsTmpl.html',
            controller: 'settingsCtrl'
        })
        .state('products', {
            url: '/products/:id',
            templateUrl: 'products/productsTmpl.html',
            controller: 'productsCtrl'
        });

    $urlRouterProvider
        .otherwise('/');
});