'use strict';

app.controller('PostviewCtrl', function ($scope, $routeParams, Post) {
    $scope.post = Post.get($routeParams.postId);
  });
