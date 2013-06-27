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

    var liEl = $('<li><a href="https://www.youtube.com/results?search_query=' + artist.get('name') + '&filters=playlist&lclk=playlist" target="new"><img src="' + artist.get('images')[3]['#text'] + '" alt=" '+ artist.get('name') +' "</img></a><p><b>'+ artist.get('name') +'</b></p><span>Rank '+ artist.get('rank') +'</span></li>').appendTo('.ranking');
    liEl.addClass('pin animated rotateInDownLeft');
  });

}());