var navbar = {
	templateUrl: '/components/navbar/navbar.tmpl.html',
	bindings: {
		title: '@',
		onCreateStory: '&'
	},
	controller: 'navbarCtrl'
}

angular.module('app.navbar',['ngMaterial'])
	.component('navbar',navbar);