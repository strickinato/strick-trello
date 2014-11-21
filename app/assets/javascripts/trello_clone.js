window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.boardCollection = new TrelloClone.Collections.Boards();
    TrelloClone.boardCollection.fetch();
    new TrelloClone.Routers.Router();
    Backbone.history.start();
  }
};
