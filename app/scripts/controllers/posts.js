'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
	$scope.posts = Post.get();
	$scope.post = {url: 'https://', title: ''};

	$scope.submitPost = function () {
		Post.save($scope.post, function (ref) {
			$scope.posts[ref.name] = $scope.post;
			$scope.post = {url: 'https://', title: ''};
		});
	};

	$scope.deletePost = function (postId) {
		Post.delete({id: postId}, function () {
			delete $scope.posts[postId];
		});
	};
});