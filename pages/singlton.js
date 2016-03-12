// Singleton - The one and only copy of an object


// Creating custom service
var myApp = angular.module('myApp', ['ngRoute']);

myApp.service('nameService', function(){
    this.name = 'Edwin Gasparian'
    var self = this
    this.namelength = function(){
        return self.name.length
    }
})

myApp.controller('testController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){
    $log.log(nameService.name)
    $log.log(nameService.namelength())
}])

// Creating custom directive
myApp.directive("searchResult", function(){
    return {
        restrict:'AECM', // E-Element, A-Atribute, C-Class, M-Comment
        template: '<div class="list-group"><a href="#" class="list-group-item active"><h4 class="list-group-item-heading">List group item heading</h4><p class="list-group-item-text">...</p></a></div>',
        replace: true
    }
})