(function() {
  var artists = new ArtistCollection();
  var events = new EventCollection();

  var promiseOnArtist = artists.fetch();
  var promiseOnEvents;

  var artistList;

  promiseOnArtist.done(function() {
    artistList = artists.pluck('name');
    events.fetch(artistList);
  });

  var attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,';
  attribution += '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ';
  attribution += 'Imagery © <a href="http://cloudmade.com">CloudMade</a>';

  var map = L
    .map('map')
    .fitWorld()
    .zoomIn(1);
  L
    .tileLayer('http://{s}.tile.cloudmade.com/d672d5e3ac6e4841bd45499967b75414/997/256/{z}/{x}/{y}.png',
      {
        attribution: attribution,
        maxZoom: 18
      })
    .addTo(map);

  events.on('add', function(eventModel) {
    var location = eventModel.get('venue').location['geo:point'];
    var lat = location['geo:lat'];
    var lon = location['geo:long'];

    if (lat && lon) {
      L
        .marker([lat, lon])
        .addTo(map)
        .bindPopup(eventModel.get('title'))
        .openPopup();
    }
  });

}());