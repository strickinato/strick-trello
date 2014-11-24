TrelloClone.Views.NewCardForm = Backbone.View.extend({
  template: JST["cards/new_card_form"],

  initialize: function(options) {
    this.list = options.list;
  },

  render: function(){
    var content = this.template();

    this.$el.html(content);
    return this;
  },

  events: {
    "click button": "createCard"
  },

  tagName: "form",

  createCard: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget.form).serializeJSON();
    formData.card.list_id = this.list.attributes.id;

    var newCard = new TrelloClone.Models.Card(formData["card"])

    var that = this;
    newCard.save({},{
      success: function(model) {
        that.list.cards().add(model);
        $("form>#card_title").val("")
        },
      error: function(){
        alert('did not save')
        }
    });
  },

})
