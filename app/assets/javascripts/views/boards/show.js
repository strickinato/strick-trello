TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  initialize: function() {
    this.listenTo(this.model,"sync", this.render);

    this.collection = this.model.lists();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addList);
    this.addForm();
  },

  addForm: function() {
    var form = new TrelloClone.Views.NewListForm({
      board: this.model,
      collection: this.collection
    });

    this.addSubview("#new-list-form", form)
  },

  template: JST["boards/show"],

  render: function() {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },


  addList: function(list){
    var cards = new TrelloClone.Collections.Cards([],{list: list})
    var newList = new TrelloClone.Views.ListShow({
      collection: cards,
      model: list
    });
    this.addSubview("#list-wrapper", newList)
  },

});
