TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "":"boardIndex"
  },

  boardIndex: function() {
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    });

    $("#main").html(view.render().$el)

  }
});
