var PopUpView = (function() {

  return Backbone.View.extend({

    tagName: 'article',
    className: 'popup-wrapper',

    initialize: function() {
      this.model = this.options.model;
    },

    render: function() {
      var tpl = $('#popup-template').html();
      var func = Handlebars.compile(tpl);
      var desc = this.model.get('description');

      if (desc && desc.length > 50) {
        desc = desc.substring(0, 250) + '...';
        desc += '<a href="'+ this.model.get('url') +'" target="new">Read More</a>';
      }

      this.$el.html(func(this.model.toJSON()));
      this.$el.find('.description').html(desc);
      return this;
    }

  });

}());