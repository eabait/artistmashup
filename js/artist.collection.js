var ArtistCollection = (function() {

  return Backbone.Collection.extend({

    model: ArtistModel,

    parse: function(resp) {
      var artists = resp.topartists.artist;
      var models = [];

      _.each(artists, function(artist) {
        models.push({
          name: artist['name'],
          rank: artist['@attr'].rank,
          listeners: artist['listeners'],
          url: artist['url'],
          images: artist['image']
        });
      });

      return models;
    },

    fetch: function() {
      var that = this;
      var def = $.Deferred();
      LastFmAPI.geo.getTopArtists(
        {
          country: 'Argentina',
          limit: '10'
        },
        {
          success: function(data) {
            that.parse(data);
            def.resolve();
          },
          error: function(code, message){
            console.log(code + ' -> ' + message);
            def.reject();
          }
        }
      );
      return def;
    }

  });

}());