TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "":"boardIndex",
    "boards/:id" : "boardShow"
  },

  boardIndex: function() {
    var indexView = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    });

    this._swapView(indexView)

  },

  boardShow: function(id) {
    var board = TrelloClone.boardCollection.getOrFetch(id);
    var showView = new TrelloClone.Views.BoardShow({
      model: board
    });

    this._swapView(showView)

  },

  _swapView: function(newView) {
    if(this.currentView){
      this.currentView.remove();
    }

    $("#main").html(newView.render().$el)

    this.currentView = newView;
  }
});
