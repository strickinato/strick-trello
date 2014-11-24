TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  initialize: function() {
    this.listenTo(this.model,"sync", this.render)
    this.listenTo(this.model,"sync", this.getLists)



  },

  getLists: function() {
    var that = this
    _(this.model.lists().models).each(function(list) {
      that.addList(list)
    })
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
