TrelloClone.Views.ListShow = Backbone.CompositeView.extend({

  initialize: function(){
    var that = this;
    this.collection.each(function(card) {
      that.addCard(card)
    })
    //this.addCardForm();
  },

  addCard: function(card) {
    var card = new TrelloClone.View.CardShow({
      model: card
    })

    this.addSubview("#card-wrapper", card)
  },


  template: JST['list/show'],

  className: "single-list",

  render: function() {
    var content = this.template({
      list: this.model
    });

    this.$el.html(content)

    return this;
  }

});
