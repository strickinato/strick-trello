TrelloClone.Views.NewListForm = Backbone.View.extend({

  template: JST["list/new"],

  className: "form-group",

  tagName: "form",

  events: {
    "click #new-list-button" : "createList"
  },

  createList: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget.form).serializeJSON();
    var newList = new TrelloClone.Models.List(formData["list"]);
    var formView = this;
    newList.save({},{
      success: function(model){
        // TrelloClone.boardCollection.add(model);
        $("form>#board_title").val("")
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
