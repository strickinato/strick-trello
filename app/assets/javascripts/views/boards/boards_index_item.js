TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({

  template: JST["boards/index_item"],

  className: "board-index-item",

  render: function() {
    var content = this.template({
      board: this.model.attributes
    });
    this.$el.html(content);
    return this;
  },

});
