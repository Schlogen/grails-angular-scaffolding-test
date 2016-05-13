//= wrapped
//= require /angular/angular 
//= require /test/app/core/test.app.core

//= require /angular/angular-ui-router
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("test.app.part", ["test.app.core", "ui.router"])
    .config(config);

function config($stateProvider) {
    $stateProvider
        .state('part', {
            url: "/part",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('part.list', {
            url: "",
            templateUrl: "/test/app/part/list.html",
            controller: "PartListController as vm"
        })
        .state('part.create', {
            url: "/create",
            templateUrl: "/test/app/part/create.html",
            controller: "PartCreateController as vm"
        })
        .state('part.edit', {
            url: "/edit/:id",
            templateUrl: "/test/app/part/edit.html",
            controller: "PartEditController as vm"
        })
        .state('part.show', {
            url: "/show/:id",
            templateUrl: "/test/app/part/show.html",
            controller: "PartShowController as vm"
        });
}