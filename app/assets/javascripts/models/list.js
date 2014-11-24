TrelloClone.Models.List = Backbone.Model.extend({

  urlRoot: 'api/lists',

  cards: function(){
    if (!this._cards) {
      this._cards = new TrelloClone.Collection.Cards();
    }

    return this._cards
  },
  //
  // parse: function(payload) {
  //   if (payload.lists) {
  //     this.lists().set(payload.lists, {parse: true});
  //     delete(payload.lists);
  //   }
  //
  //   return payload;
  // }

});
