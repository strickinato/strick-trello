TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  initialize: function() {
    //this.listenTo(this.model,"sync", this.initializeListCollection);
    this.listenTo(this.model,"sync", this.render);
    this.listenTo(this.model,"sync", this.addInitialSubviews);

    this.collection = this.model.lists();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addList);
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

  // initializeListCollection: function(){
  //   this.collection = this.model.lists();
  //   this.listenTo(this.collection, "sync", this.render)
  //   this.listenTo(this.collection, "add", this.addList)
  // },

  addInitialSubviews: function() {
    var that = this;
    this.collection.each(function(list) {
      that.addList(list)
    })
    this.addForm();

  },

  addList: function(list){
    var newList = new TrelloClone.Views.ListShow({
      model: list
    });
    this.addSubview("#list-wrapper", newList)
  },

});
