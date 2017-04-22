(function(){
    angular.module('HelperBot', ['ui.router', 'ngFileUpload','ui.bootstrap'])
            .config(function($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise('/');

            $stateProvider

            .state('main', {
                url: "/",
                templateUrl: "app/login-signup/login-signup.html",
                controller: "LoginController"
            })
            .state('home', {
                url: "/home",
                templateUrl: "app/home/home.html",
                controller: "HomeController"
            })
            .state('incorrect-billing', {
                url: "/chat-bot/bill",
                templateUrl: "app/chat-bots/chat-bot.html",
                controller: "BotController"
            })
            .state('cancellation-fee', {
                url: "/chat-bot/fee",
                templateUrl: "app/chat-bots/chat-bot.html",
                controller: "BotController"
            })
            .state('need-invoices', {
                url: "/chat-bot/invoice",
                templateUrl: "app/chat-bots/chat-bot.html",
                controller: "BotController"
            })
            .state('refund-queries', {
                url: "/chat-bot/refund",
                templateUrl: "app/chat-bots/chat-bot.html",
                controller: "BotController"
            })
            .state('product-damage', {
                url: "/chat-bot/product",
                templateUrl: "app/chat-bots/chat-bot.html",
                controller: "BotController"
            })
            .state('delivery-status', {
                url: "/chat-bot/status",
                templateUrl: "app/chat-bots/chat-bot.html",
                controller: "BotController"
            })
            .state('time-queries', {
                url: "/chat-bot/time",
                templateUrl: "app/chat-bots/chat-bot.html",
                controller: "BotController"
            })
            .state('communication-issues', {
                url: "/chat-bot/communication",
                templateUrl: "app/chat-bots/chat-bot.html",
                controller: "BotController"
            })
            .state('behaviour-issues', {
                url: "/chat-bot/behaviour",
                templateUrl: "app/chat-bots/chat-bot.html",
                controller: "BotController"
            });
        })
}());
