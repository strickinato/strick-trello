TrelloClone.Views.BoardsIndex = Backbone.View.extend({

  initialize: function(){
    this.listenTo(TrelloClone.boardCollection, "sync", this.render)
  },

  collection: TrelloClone.boardCollection,

  template: JST['boards/index'],

  render: function() {
    var content = this.template({
      boards: TrelloClone.boardCollection
    });

    this.$el.html(content);
    return this;
  }

});
