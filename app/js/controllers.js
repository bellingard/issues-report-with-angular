'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.issuesServices']).
  controller('MyCtrl1', ['$scope', '$filter', 'Issue', function($scope, $filter, Issue) {
    $scope.issues = Issue.all();

    $scope.allIssuesCount = $scope.issues.length;
    $scope.newIssuesCount = $filter("filter")($scope.issues, function(issue) {return issue.isNew;}).length;
    $scope.resolvedIssuesCount = $filter("filter")($scope.issues, function(issue) {return issue.status==='RESOLVED';}).length;


    $scope.$watch("issueQuery", function(query){
      $scope.filteredIssues = $filter("filter")($scope.issues, query);
    }, true);

  }]);
