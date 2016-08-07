angular.module('app')
	.service('story', function($http) {
		this.getStory = function() {
			var url = "";
			var isRequestPending = false;
			if('caches' in window) {
				caches.match(url).then(function(response) {
					if(response) {
						response.json().then(function(json) {
							if(isRequestPending) {
								console.log('updated From Cache');
							}
						});
					}
				});
			}
			$http.get(url).success(function(data) {
				console.log('data',data);
			})
		};
	})