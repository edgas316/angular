// MODULE
var angularApp = angular.module('angularApp', ['ngMessages','ngResource']);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', '$timeout', function ($scope, $log, $filter, $resource, $timeout) {
    $scope.name = "Edwin"
    
    console.log($scope)
    console.log($log )
    
    $log.log("hello")
    $log.info('this is some info')
    $log.warn('Warning!')
    $log.debug('some debug information')
    $log.error('this is an error')
    
    $scope.formattername = $filter('uppercase')($scope.name)
    $log.info($scope.name)
    $log.info($scope.formattername)
    
    console.log($resource)
    
    $timeout(function(){
        $scope.name = 'Everybody'
    }, 3000)
    
    $scope.handle = 'yourname'
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle)
    }
    
    $scope.characters = 5
    $scope.rules = [
        {rulename: "Must be 5 characters"},
        {rulename: "Must not be used elsewhere"},
        {rulename: "Must be cool"}
    ]
    
    console.log($scope.rules)
    
    var tb = document.getElementById("name")
    
    tb.addEventListener("keypress", function(event){
        console.log(event)
    })
    
    $scope.$watch('handle', function(newValue, oldValue){
        console.info('Changed!')
        console.log('Old: ' + oldValue)
        console.log('New: ' + newValue)
    })
// =================================================
    setTimeout(function(){
        $scope.$apply(function(){
            $scope.handle = "newteitterhandle"
            console.log('Scope changed!')
        })
    }, 4000)
// =================================================
    
}]);

var searchPeople = function($scope, finrstname, lastname, height, age, occupation){
    return 'Edwin Gasparian'
}
console.log(angular.injector().annotate(searchPeople))
// ["finrstname", "lastname", "height", "age", "occupation"]

