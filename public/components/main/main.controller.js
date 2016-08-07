function mainCtrl(storyDialog) {
	var ctrl = this;

	ctrl.createStory = function(ev) {
		return storyDialog.createStory(ev);
	}


}

angular.module('app')
	.controller('mainCtrl', mainCtrl);