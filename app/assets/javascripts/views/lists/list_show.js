TrelloClone.Views.ListShow = Backbone.CompositeView.extend({

  initialize: function(){

    this.listenTo(this.model.cards(), "add", this.addList);

    var that = this;
    this.model.cards().each(function(card) {
      that.addCard(card)
    })
    //this.addCardForm();
  },

  addCard: function(card) {
    var cardShow = new TrelloClone.Views.CardShow({
      model: card
    })
    this.addSubview(".card-wrapper", cardShow)
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
