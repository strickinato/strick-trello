TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({

  initialize: function(){
    this.listenTo(TrelloClone.boardCollection, "sync", this.render)
    this.listenTo(TrelloClone.boardCollection, "add", this.addBoard)
    this.listenTo(TrelloClone.boardCollection, "remove", this.removeBoard)

    var that = this;
    TrelloClone.boardCollection.each(function(board){
      that.addBoard(board);
    });

    this.addForm();
  },

  addBoard: function(board){
    var subBoard = new TrelloClone.Views.BoardsIndexItem({
      model: board
    });

    this.addSubview(".boardsItems", subBoard)
  },

  removeBoard: function(board){
    var subBoard = _.find(
      this.subviews(".boardsItems"),
      function (subview) {
        return subview.model === board;
    });

    this.removeSubview(".boardsItems", subBoard)
  },

  addForm: function() {
    var form = new TrelloClone.Views.NewBoardForm();
    this.addSubview(".new-board-form", form)
  },

  template: JST['boards/index'],

  render: function() {
    var content = this.template({
      boards: TrelloClone.boardCollection
    })

    this.$el.html(content)
    this.attachSubviews();

    return this;
  }

});
