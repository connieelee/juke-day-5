/*global juke*/
'use strict';

juke.directive('albumList', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/album/templates/albumList.html',
		scope: {
			albums: '=' // @ seems to work as well! hm!
		}
	}
});
