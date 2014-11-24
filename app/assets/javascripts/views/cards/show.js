TrelloClone.Views.CardShow = Backbone.View.extend({
  template: ["cards/show"],

  render: function(){
    var content = this.template({
      card: this.model
    })

    this.$el.html(content);
    return this;
  },

  className: "card",


})
