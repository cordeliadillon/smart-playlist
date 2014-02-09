var app = angular.module('coolApp', []);

app.controller('SmartPlaylistController',  function($scope){
  $scope.searchResults = [];
  $scope.query = "";
  $scope.sc_id = "##SOUNDCLOUD_CLIENT_ID##";
  $scope.selectedTrack = null;
  $scope.playlist = [];

  SC.initialize({ client_id: $scope.sc_id });

  $scope.submitQuery = function() {
    $.get('https://api.soundcloud.com/tracks.json?client_id=' + $scope.sc_id, { q: $scope.query, bpm: { from: 120 } },
      function(tracks) {
        $scope.searchResults = tracks;
        $scope.$apply();
      }
    );
  };

  $scope.addToPlaylist = function(track) {
    $scope.playlist.push(track);
  }

  $scope.removeFromPlaylist = function(track) {
    $scope.playlist.splice($scope.playlist.indexOf(track),1);
  }

  $scope.selectTrack = function(track) {
    $scope.selectedTrack = track;
    $scope.updateAudio();
  };

  $scope.updateAudio = function() {
    $("#scAudio").attr("src", $scope.selectedTrack.stream_url+"?client_id=" + $scope.sc_id); // HACK
  };
});

