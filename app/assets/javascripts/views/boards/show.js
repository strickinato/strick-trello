TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  initialize: function() {
    this.listenTo(this.model,"sync", this.render)
  },

  template: JST["boards/show"],

  render: function() {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    return this;
  }
});
