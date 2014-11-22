TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({

  template: JST["boards/index_item"],

  className: "board-index-item",

  events: {
    "click button.delete-board": "deleteBoard",
    "click" : "showBoard"
  },

  showBoard: function(event){
    if(event.target.tagName !== "BUTTON") {
      Backbone.history.navigate("/boards/" + this.model.id)
    }
  },

  deleteBoard: function(event) {
    event.preventDefault();
    this.model.destroy({
      success: function(model) {
        TrelloClone.boardCollection.remove(model);
      }
    });
  },

  render: function() {
    var content = this.template({
      board: this.model.attributes
    });
    this.$el.html(content);
    return this;
  },

});
