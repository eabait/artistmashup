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
      this.$el.html(func(this.model.toJSON()));
      this.$el.find('.description').html(this.model.get('description'));
      return this;
    }

  });

}());