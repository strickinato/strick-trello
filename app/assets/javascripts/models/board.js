TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  lists: function() {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.BoardLists([], { board_id: this.id });
    }
    return this._lists
  },

  parse: function(payload) {
    if (payload.lists) {
      this.lists().set(payload.lists, {parse: true});
      // debugger
      delete(payload.lists);
    }

    return payload;
  }
});
