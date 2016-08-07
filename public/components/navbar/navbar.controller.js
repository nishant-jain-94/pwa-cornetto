function navbarCtrl($mdSidenav,$mdDialog) {
	var ctrl = this;
	
	ctrl.toggleSidenav = function() {
		return $mdSidenav('left').toggle();
	};

	ctrl.createStory = function(ev) {
		if(ctrl.onCreateStory !== undefined) {
			ctrl.onCreateStory(ev);
		}
	}
}	

angular.module('app.navbar')
	.controller('navbarCtrl', navbarCtrl);