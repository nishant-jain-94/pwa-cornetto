var cacheName = "Cornetto";
var dataCacheName = "";

var filesToBeCached = [
	'/',
	'/index.html',
	'/app.js',
	'images/icons/icon-128x128.png',
	'images/icons/icon-144x144.png',
	'images/icons/icon-152x152.png',
	'images/icons/icon-192x192.png',
	'images/icons/icon-256x256.png',
	'/bower_components/angular/angular.min.js',
	'/bower_components/angular-animate/angular-animate.js',
	'/bower_components/angular-aria/angular-aria.min.js',
	'/bower_components/angular-messages/angular-messages.min.js',
	'/bower_components/angular-material/angular-material.min.js',
	'/bower_components/angular-material/angular-material.min.css',
	'/components/main/main.component.js',
	'/components/main/main.controller.js',
	'/components/main/main.tmpl.html',
	'/components/navbar/navbar.component.js',
	'/components/navbar/navbar.controller.js',
	'/components/navbar/navbar.tmpl.html',
	'/components/story/story.component.js',
	'/components/story/story.tmpl.html',
	'/components/storyDialog/storyDialog.controller.js',
	'/components/storyDialog/storyDialog.tmpl.html',
	'/components/storyDialog/storyDialog.service.js',	
	'/images/ic_add_black_24px.svg',
	'/images/ic_close_black_24px.svg',
	'/images/ic_menu_black_24px.svg',
	'/images/ic_refresh_black_24px.svg',
	'/styles/style.css',
];

self.addEventListener('install', function(event) {
	event.waitUntil(caches.open(cacheName).then(function(cache) {
		console.log('Opening Cache')
		return cache.addAll(filesToBeCached);
	}));
});

self.addEventListener('activate', function(event) {
	event.waitUntil(caches.keys().then(function(keyList) {
		Promise.all(keyList.map(function(key) {
			if(key !== cacheName) {
				return caches.delete(key);
			}
		}))
	}));
});


//This part yet to understand
self.addEventListener('fetch', function(event) {
	var dataUrl = "https://cornetto-d0388.firebaseio.com/";
	if(event.request.url.indexOf(dataUrl) === 0) {
		fetch(event.request)
			.then(function(response) {
				return caches.open(dataCacheName).then(function(cache) {
					cache.put(event.request.url,response.clone())
					console.log('Fetched & Cached Data');
					return response;
				});
			});
	} 
	else {
		event.respondWith(caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		}));
	}
});


