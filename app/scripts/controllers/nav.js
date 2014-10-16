'use strict';

app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
  $scope.post = {url: 'https://', title: ''};

  $scope.submitPost = function () {
  	Post.create($scope.post).then(function (ref) {
      $location.path('/posts/' + ref.name());
  	});
  };

  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
});
