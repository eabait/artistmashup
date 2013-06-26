(function() {
  var artists = new ArtistCollection();
  var events = new EventCollection();
  var mapView = new MapView({
    el: '#map',
    model: events
  });
  var promiseOnArtist = artists.fetch();

  promiseOnArtist.done(function() {
    events.fetch(artists.pluck('name'));
  });

  $('header')
    .css('visibility', 'visible')
    .addClass('animated fadeIn');

  mapView.render();

  artists.on('add', function(artist) {

    var liEl = $('<li><img src="' + artist.get('images')[2]['#text'] + '" alt=" '+ artist.get('name') +' "</img></li>').appendTo('.ranking');
    liEl.addClass('animated rotateInDownLeft');
  });

}());