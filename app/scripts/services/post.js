'use strict';

app.factory('Post', function($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var posts = $firebase(ref.child('posts')).$asArray();

  var Post = {
    all: posts,
    create: function(post) {
      return posts.$add(post).then(function (postRef) {
        $firebase(ref.child('user_posts').child(post.creatorUID)).$push(postRef.name());
      });
    },
    get: function(postId) {
      return $firebase(ref.child('posts').child(postId)).$asObject();
    },
    delete: function(postId) {
      return posts.$remove(postId);
    },
    comments: function (postId) {
      return $firebase(ref.child('comments').child(postId)).$asArray();
    }
  };

  return Post;
});