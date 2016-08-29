/*global juke*/
'use strict';

juke.directive('songList', function(PlayerFactory) {
    return {
        restrict: 'E',
        templateUrl: 'js/song/templates/songList.html',
        scope: {
            list: '=',
            showMe: '&'
        },
        link: function(scope, element, attrs) {
            scope.toggle = function(song) {
                if (song !== PlayerFactory.getCurrentSong()) {
                    PlayerFactory.start(song, attrs.list);
                } else if (PlayerFactory.isPlaying()) {
                    PlayerFactory.pause();
                } else {
                    PlayerFactory.resume();
                }
            };

            scope.getCurrentSong = function() {
                return PlayerFactory.getCurrentSong();
            };

            scope.isPlaying = function(song) {
                return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
            };
        }
    }
});

juke.directive('doubleClick', function() {
    return {
        restrict: 'A',
        scope: {
            doubleClick: '&'
        },
        link: function(scope, element) {
            element.on('dblclick', function() {
                scope.doubleClick();
            });
        }
    }
});
