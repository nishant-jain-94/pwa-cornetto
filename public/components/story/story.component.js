var story = {
	templateUrl: 'components/story/story.tmpl.html',
	bindings: {
		createdOn: '@',
		title: '@',
		content: '@'
	}
};

angular.module('app.story',['ngMaterial'])
	.component('story',story);