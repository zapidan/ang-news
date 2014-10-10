'use strict';

app.factory('Post', function ($resource) {
	return $resource('https://amber-fire-8076.firebaseio.com/posts/:id.json');
});