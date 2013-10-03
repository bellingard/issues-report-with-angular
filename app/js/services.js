'use strict';

/* Services */

angular.module('myApp.issuesServices', [])
.factory('Issue', function() {
  var Issue = (function() {
    return {
      all : function() {
        return issues_data.issues;
      }
    };
  })();

  return Issue;
})
.factory('Rule', function() {
  var Rule = (function() {
    return {
      all : function() {
        return issues_data.rules;
      }
    };
  })();

  return Rule;
});
