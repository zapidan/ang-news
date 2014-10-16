'use strict';

app.factory('Post', function($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var posts = $firebase(ref.child('posts')).$asArray();

  var Post = {
    all: posts,
    create: function(post) {
      return posts.$add(post);
    },
    get: function(postId) {
      return posts.$child(postId);
    },
    delete: function(postId) {
      return posts.$remove(postId);
    }
  };

  return Post;
});