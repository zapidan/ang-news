'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
  $scope.posts = Post.all;
  $scope.post = {url: 'https://', title: ''};

  $scope.submitPost = function () {
  	Post.create($scope.post).then(function () {
  		$scope.post = {url: 'https://', title: ''};
  	})
  };

  $scope.deletePost = function (postId) {
    Post.delete(postId);
  };
});