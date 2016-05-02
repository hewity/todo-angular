"use strict";

(function(){
  angular
  .module("todo", [])

  app.controller('TodosController' function(){
    this.todos = [
      "Devotions"
      "Breakfast"
      "Clean up"
      "Grocery shop"
      "School work"
      "Return library book"
      "Prepare lunch"
    ]
    vm.formIsVisible = false;
    vm.toggleForm = function(){
      if(vm.formIsVisible){
        vm.formIsVisible = false;
      }
      else{
        vm.formIsVisible = true;
      }
    };

    vm.create = function(){
      vm.todoList.push(vm.action);
      vm.action = "";
    };
    vm.update = function(index){
      vm.todoList[index] = vm.action;
    };

    vm.destroy = function(index){
      vm.todoList.splice(index, 1)
    }
  }

  });
})();






// var app = angular.module('ToDoApp', []);
// app.controller('TodosController' function($scope){
//   #scope.tasks = [];
//
//   var taskData = localStorage['taskList'];
//   $scope.searchEnter = function(){
//     if(event.which == 13 && scope.task != "") {
//       $scope.addTask();
//     }
//   };
//
//   $scope.addTask = function() {
//     $scope.tasks.push({'taskMessage':$scope.task, 'status':false});
//     console.log($scope.tasks);
//     $scope.task = '';
//     localStorage['taskList'] = JSON.stringify($scope.tasks);
//     console.log(localStorage);
//   };
//   $scope.contentEdit = function(x) {
//     console.log('working');
//     for(i = 0; i < $scope.tasks.length; i++) {
//       $scope.tasks [i].taskMessage == x) {
//         $scope.tasks [i].taskMessage = event.target.innerText;
//       }
//     }
//     localStorage['taskList'] = JSON.stringify($scope.tasks);
//
//     console.log($scope.tasks);
//    event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false"
//  };
//  $scope.enterAgain = function(msg) {
//    if(event.which == 13 && msg != "") {
//      $scope.contentEdit();
//      console.log(11);
//    }

 }
});
