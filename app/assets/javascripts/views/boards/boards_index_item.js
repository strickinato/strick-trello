TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({

  template: JST["boards/index_item"],

  render: function() {
    var content = this.template({
      board: this.model.attributes
    });
    this.$el.html(content);
    return this;
  },

});
