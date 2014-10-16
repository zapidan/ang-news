'use strict';


app.filter('hostnameFromUrl', function () {
    return function (input) {
    	var url = document.createElement('a');

    	url.href = input;

        return url.hostname;
    };
  });
