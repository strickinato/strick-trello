TrelloClone.Views.NewListForm = Backbone.View.extend({

  initialize: function(options) {
    this.board = options.board;
    this.collection = options.collection;
  },

  template: JST["list/new"],

  className: "form-group",

  tagName: "form",

  events: {
    "click #new-list-button" : "createList"
  },

  createList: function(event) {
    event.preventDefault();

    var formData = $(event.currentTarget.form).serializeJSON();
    formData.list.board_id = this.board.attributes.id
    var newList = new TrelloClone.Models.List(formData["list"]);

    var that = this;
    newList.save({},{
      success: function(model){
        that.collection.add(model);
        $("form>#list_title").val("");
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
