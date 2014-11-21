TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  collection: TrelloClone.boardCollection,

  initialize: function(){
    this.listenTo(TrelloClone.boardCollection, "sync", this.render)
    this.listenTo(TrelloClone.boardCollection, "add", this.addBoard)
    // Maybe add Remove Board
    TrelloClone.boardCollection.each(function(board){
      this.addBoard(board);
    })
  },

  addBoard: function(board){
    var subBoard = new TrelloClone.Views.BoardsIndexItem({
      model: board
    });

    this.addSubview(".boardsItems", subBoard)
  },

  // For Future removeBoard: function(){},

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
