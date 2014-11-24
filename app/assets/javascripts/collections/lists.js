TrelloClone.Collections.BoardLists = Backbone.Collection.extend({
  url: 'api/lists',

  model: TrelloClone.Models.List,

  initialize: function (models, options) {
    this.board = options.board;
  }

});
