document.addEventListener('DOMContentLoaded', function () {
  var sc_client_id = ""; // TODO: FILL IN YOUR OWN DAMN CLIENT_ID
  var track = "http://soundcloud.com/kchqtt/ki-choquette-sunbather"; // change this to whatever you want
  var resolveURL = "http://api.soundcloud.com/resolve.json?url=" + track + "&client_id=" + sc_id;

  SC.initialize({ client_id: c_id });

  $.get(resolveURL, function (track) {
    $("#myAudio").attr("src", track.stream_url+"?client_id=" + sc_id);
  });

});