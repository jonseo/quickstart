// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.directive('noScroll', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {
            $element.on('touchmove', function(e) {
                e.preventDefault();
            });
        }
    }
})

.controller('CardsCtrl', function($scope) {
    var cardTypes = [
        { id: '1', image: 'img2/cardio.png', title: 'Cardio', myValue: true},
        { id: '2', image: 'img2/cardio-boxing.png', title: 'Cardio-Boxing', myValue: true},
        { id: '3', image: 'img2/core.png', title: 'Core', myValue: true},
        { id: '4', image: 'img2/HIT.png', title: 'HIT', myValue: true},
        { id: '5', image: 'img2/lo impact.png', title: 'Lo Impact', myValue: true},
        { id: '6', image: 'img2/strength.png', title: 'Strength', myValue: true},
        { id: '7', image: 'img2/yoga.png', title: 'Yoga', myValue: true},
        { id: '8', image: 'img2/prenatal.png', title: 'Prenatal', myValue: true},
        //{ id: '9', image: 'img/gun.gif', title: 'Load em Up', myValue: true},
        //{ id: '10', image: 'img/bogachief.jpg', title: 'North', myValue: true},
        //{ id: '11', image: 'img/cinder.jpg', title: 'My App', myValue: true},
        //{ id: '12', image: 'img/forks.jpg', title: 'Forks', myValue: true},
        //{ id: '13', image: 'img/humptulips.jpg', title: 'North', myValue: true},
        //{ id: '14', image: 'img/seiki.jpg', title: 'Seiki', myValue: true},
        //{ id: '15', image: 'img/solduc.jpg', title: 'Solduc', myValue: true},
        //{ id: '16', image: 'img/willapoo.jpg', title: 'Willapoo', myValue: true},
        //{ id: '17', image: 'img/wynoochee.jpg', title: 'Wynoochee', myValue: true}
    ];
 
    $scope.cards = [];
 
    $scope.addCard = function(i) {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.unshift(angular.extend({}, newCard));
    }
 
    for(var i = 0; i < 5; i++) $scope.addCard(4);
 
    $scope.cardSwipedLeft = function(index) {
        console.log('Left swipe');
        $scope.addCard();
    }
 
    $scope.cardSwipedRight = function(index) {
        console.log('Right swipe');
        $scope.addCard();
    }
 
    $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
        $scope.addCards(1);
    }
});

//localStorage.setItem("cardTypes", "myValue");

