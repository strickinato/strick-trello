TrelloClone.Views.ListShow = Backbone.CompositeView.extend({

  initialize: function(){

    this.listenTo(this.model.cards(), "add", this.addCard);

    var that = this;
    this.model.cards().each(function(card) {
      that.addCard(card)
    })
    this.addCardForm();

  },

  events: {
    "sortover .card-wrapper": "lightUp",
    "sortout .card-wrapper": "lightDown"
  },

  lightUp: function(event) {
    $(event.currentTarget).css('background-color', 'fuchsia')
  },

  lightDown: function(event) {
    $(event.currentTarget).css('background-color', 'white')
  },

  addCard: function(card) {
    var cardShow = new TrelloClone.Views.CardShow({
      model: card
    })
    this.addSubview(".card-wrapper", cardShow)
  },


  template: JST['list/show'],

  className: "single-list",

  addCardForm: function(){
    var form = new TrelloClone.Views.NewCardForm({
      list: this.model
    });
    this.addSubview(".new-card-form", form)
  },

  render: function() {
    var content = this.template({
      list: this.model
    });
    this.model.cards().sort();
    this.$el.html(content)
    return this;
  }

});
