'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post, Auth) {
  $scope.posts = Post.all;
  $scope.user = Auth.user;
  $scope.post = {url: 'https://', title: ''};

  $scope.deletePost = function (postId) {
    Post.delete(postId);
  };
});