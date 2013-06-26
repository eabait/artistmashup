(function() {
  var artists = new ArtistCollection();
  var promiseOnArtist = artists.fetch();

  var map = L.map('map').locate({setView: true, maxZoom: 5});
  L.tileLayer('http://{s}.tile.cloudmade.com/d672d5e3ac6e4841bd45499967b75414/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  }).addTo(map);

}());