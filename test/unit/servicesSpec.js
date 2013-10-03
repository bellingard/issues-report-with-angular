'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('myApp.issuesServices'));

  describe('loadIssues', function() {
    it('should load issues from JSON report', inject(function(Issue) {
      expect(Issue.all().length).toEqual(1019);
    }));
  });

});
