function storyDialogCtrl($mdDialog) {
	var ctrl = this;

	ctrl.hide = function() {
		console.log('called hide')
		$mdDialog.hide();
	}
}

angular.module('app')
	.controller('storyDialogCtrl',storyDialogCtrl);

