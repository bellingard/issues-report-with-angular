'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.issuesServices']).

  /* Main controler */
  controller('Main', ['$scope', '$filter', 'Issue', 'Rule', function($scope, $filter, Issue, Rule) {
    $scope.issues = Issue.all();
    $scope.allIssuesCount = $scope.issues.length;
    $scope.newIssuesCount = $filter("filter")($scope.issues, function(issue) {return issue.isNew;}).length;
    $scope.resolvedIssuesCount = $filter("filter")($scope.issues, function(issue) {return issue.status==='RESOLVED';}).length;

    // Filter on new issues by default
    $scope.issueQuery = {isNew:true};

    $scope.$watch("issueQuery", function(query){
      $scope.filteredIssues = $filter("filter")($scope.issues, query);
      $scope.rules = $.map(Rule.all(), function(rule) {
        return {'rule': rule, 'count': $.grep($scope.issues,
            function( issue ) {
              return issue.rule === rule.key;
            }).length
        };
      });
    }, true);

    $scope.rules = $.map(Rule.all(), function(rule) {
      return {'rule': rule, 'count': $.grep($scope.issues,
          function( issue ) {
            return issue.rule === rule.key;
          }).length
      };
    });

  }])

;
