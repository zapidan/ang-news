'use strict';

app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
  $scope.post = {url: 'https://', title: ''};

  $scope.submitPost = function () {
  	$scope.post.creator = $scope.user.profile.username;
  	$scope.post.creatorUID = $scope.user.uid;
  	Post.create($scope.post).then(function (ref) {
      $location.path('/posts/' + ref.name());
  	});
  };

  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;

  $scope.user = Auth.user;
});
