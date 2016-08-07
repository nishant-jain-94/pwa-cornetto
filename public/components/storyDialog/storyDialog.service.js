angular.module('app')
	.service('storyDialog', function($mdDialog) {
		this.createStory = function(ev,scope) {
			return $mdDialog.show({
				templateUrl: 'components/storyDialog/storyDialog.tmpl.html',
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: true,
				controller: 'storyDialogCtrl',
				controllerAs: 'ctrl'
			});
		}
	});