TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  collection: TrelloClone.boardCollection,

  initialize: function(){
    this.listenTo(TrelloClone.boardCollection, "sync", this.render)
    this.listenTo(TrelloClone.boardCollection, "add", this.addBoard)
    // Later add Remove Board
    TrelloClone.boardCollection.each(function(board){
      this.addBoard(board);
    })

    this.addForm();
  },

  addBoard: function(board){
    var subBoard = new TrelloClone.Views.BoardsIndexItem({
      model: board
    });

    this.addSubview(".boardsItems", subBoard)
  },

  // For Future removeBoard: function(){},

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
