var ArtistModel = (function() {

  return Backbone.Model.extend({

    defaults : {
      name: '',
      rank: 0,
      listeners: 0,
      url: '',
      images: null
    }

  });

})();