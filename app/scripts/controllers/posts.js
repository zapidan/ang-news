'use strict';

app.controller('PostsCtrl', function ($scope) {
	$scope.posts = [];
	$scope.post = {url: 'htps://', title: ''};

	$scope.submitPost = function () {
		$scope.posts.push($scope.post);
		$scope.post = {url: 'htps://', title: ''};
	};

	$scope.deletePost = function (index) {
		$scope.posts.splice(index, 1);
	};
});