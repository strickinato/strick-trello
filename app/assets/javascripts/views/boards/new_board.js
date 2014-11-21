TrelloClone.Views.NewBoardForm = Backbone.View.extend({

  template: JST["boards/new_board_form"],

  className: "form-group",

  events: {
    "click #new-board-button" : "createBoard"
  },

  createBoard: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget.form).serializeJSON();
    var newBoard = new TrelloClone.Models.Board(formData);
    var formView = this;
    newBoard.save({},{
      success: function(model){
        alert("saved");
        debugger;
        TrelloClone.boardCollection.add(model);
      },
      error: function() {
        alert("Did Not Save")
      }
    })
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

});
