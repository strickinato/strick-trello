TrelloClone.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "":"boardIndex",
    "boards/:id" : "boardShow"
  },

  boardIndex: function() {
    var indexView = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.boardCollection
    });

    this._swapView(indexView)

  },

  boardShow: function(id) {
    var board = TrelloClone.boardCollection.getOrFetch(id);
    var showView = new TrelloClone.Views.BoardShow({
      model: board,
    });
    this._swapView(showView)

  },

  _swapView: function(newView) {
    if(this.currentView){
      this.currentView.remove();
    }

    this.currentView = newView;
    this.$rootEl.html(newView.render().$el)

  }
});
