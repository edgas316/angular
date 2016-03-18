// MODULE
var angularApp = angular.module('angularApp', ['ngMessages','ngResource', 'ngRoute']);

// Routing
angularApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
})

// Controller and dependency injection
angularApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){
    $log.info('Second controller loaded!!!')
    $scope.name = "Marine"
    $scope.num = $routeParams.num || 'newpage'
}]);
// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', '$timeout', '$http','$location', function ($scope, $log, $filter, $resource, $timeout, $http, $location) {
    
    $log.info($location.path())
    $scope.thename = "Edwin"
    
    // ROUTING
    
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
    
    $scope.alertClick = function(){
        alert("clicked")
    }
// =================================================
    setTimeout(function(){
        $scope.$apply(function(){
            $scope.handle = "newteitterhandle"
            console.log('Scope changed!')
        })
    }, 4000)
// =================================================
    
// =================================================  
// AJAX javascript native code
//    var rulesrequest = new XMLHttpRequest()
//    rulesrequest.onreadystatechange = function(){
//        $scope.$apply(function(){
//            if(rulesrequest.readyState == 4 && rulesrequest.status == 200){
//                $scope.newrules = JSON.parse(rulesrequest.responseText)
//            }
//        })
//    }
//    rulesrequest.open("GET", "/api", true)
//    rulesrequest.send()
// =================================================
// AJAX in angular way
//    $http.get('/api')
//        .success(function (result) {
//            $scope.rules = result
//        })
//        .error(function(data, status){
//            console.log(data)
//        });
//    
//    $scope.newRule = ''
//    $scope.addRule = function(){
//        $http.post('/api', {newRule:$scope.newRule})
//        .success(function(result){
//            $scope.rules = result;
//            $scope.newRule = ''
//        })
//        .error(function(data, status){
//            console.log(data)
//        })
//    }
// =================================================

    $scope.person = {
        name: "Edwin Gasparian",
        address: '123 Main St., New York, NY 111111'
    }
    
    $scope.people = [
        {
            name: "Marine Gabrielyan",
            address: "555 Second St",
            city:'San-Fran',
            state: 'CA',
            zip:'94500'
        },
        {
            name: "David Gasparyan",
            address: "555 Second St",
            city:'San-Fran',
            state: 'CA',
            zip:'94500'
        },
        {
            name: "Edwin Gasparian",
            address: "555 Second St",
            city:'San-Fran',
            state: 'CA',
            zip:'94500'
        }
    ]
    
    $scope.formatedAddr = function(people){
        return people.address + ', ' + people.city + ', ' + people.state + ', ' + people.zip
    }
    
    
}]);

angularApp.service('nameService', function(){
    this.myname = 'Edwin Gasparian'
    var self = this
    this.namelength = function(){
        return self.myname.length
    }
})

angularApp.controller('testController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){
    $log.log(nameService.nyname)
    $log.log(nameService.namelength())
}])

// Creating custom directive
angularApp.directive("searchResult", function(){
    return {
        restrict:'EACM', // E-Element, A-Atribute, C-Class, M-Comment
//        template: '<div class="list-group"><a href="#" class="list-group-item"><h4 class="list-group-item-heading">List group item heading</h4><p class="list-group-item-text">asdfasdfasdfasdfasdfasdfasdfasdfasdf</p></a></div>',
        templateUrl:'directives/search.html',
        replace: true,
        scope:{
            personName: "@", // '@' = Text
            personAddress:"@"
        }
    }
});
angularApp.directive("objPassing", function(){
    return {
        restrict:'EACM', // E-Element, A-Atribute, C-Class, M-Comment
//        template: '<div class="list-group"><a href="#" class="list-group-item"><h4 class="list-group-item-heading">List group item heading</h4><p class="list-group-item-text">asdfasdfasdfasdfasdfasdfasdfasdfasdf</p></a></div>',
        templateUrl:'directives/search.html',
        replace: true,
        scope:{
            personObject: "=" // '=' = two way binding - passing the object
        }
    }
})

angularApp.directive("accessFunc", function(){
    return {
        restrict:'EACM', // E-Element, A-Atribute, C-Class, M-Comment
//        template: '<div class="list-group"><a href="#" class="list-group-item"><h4 class="list-group-item-heading">List group item heading</h4><p class="list-group-item-text">asdfasdfasdfasdfasdfasdfasdfasdfasdf</p></a></div>',
        templateUrl:'directives/search.html',
        replace: true,
        scope:{
            peopleObject: "=", // '=' = two way binding - passing the object,
            formattedAddressFunction: "&" // '&' = means it is a function
        }
    }
})

var searchPeople = function($scope, finrstname, lastname, height, age, occupation){
    return 'Edwin Gasparian'
}
console.log(angular.injector().annotate(searchPeople))
// ["finrstname", "lastname", "height", "age", "occupation"]

