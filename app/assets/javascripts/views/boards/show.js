TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  initialize: function() {
    this.listenTo(this.model,"sync", this.render)
    this.listenTo(this.model,"sync", this.getLists)

    this.addForm();

  },

  getLists: function() {
    var that = this
    _(this.model.lists().models).each(function(list) {
      that.addList(list)
    })
  },

  addForm: function() {
    var form = new TrelloClone.Views.NewListForm();

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
    var newList = new TrelloClone.Views.ListShow({
      model: list
    });
    this.addSubview($("#list-wrapper"), newList)
  },

});
