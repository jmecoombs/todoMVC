/* CLASS NOTES*/

var app = {
  init: function() {
    $('.new-todo').keypress(app.addNewItem);
    $('.todo-list').on('click', '.toggle', app.toggleStatus);
    $('.show-all').click(app.showAll);
    $('.show-active').click(app.showActive);
    $('.show-complete').click(app.showComplete);
  },
  addNewItem: function(ev) {
    // when keypress is enter
    if(ev.which === 13) {
      // get the new todo label
      var label = $('.new-todo').val();
      // create new todo item and append
      var newItem = $('.templates .todo-item').clone();
      // update the label
      newItem.find('label').text(label)
      // append to list
      newItem.appendTo('.todo-list');
      // reset todo input
      $('.new-todo').val('');
      // update remaining
      app.updateRemaining();
    }
  }, 
  toggleStatus: function(ev) {
    $(ev.target).closest('.todo-item').toggleClass('complete');
    app.updateRemaining();
  },
  updateRemaining: function() {
    var remaining = $('.todo-list .todo-item').not('.complete');
    $('.remaining').text(remaining.length + ' remaining');
  },
  showAll: function() {
    $('.todo-item').show();
  },
  showActive: function() {
    $('.todo-item').not('.complete').show();
    $('.todo-item.complete').hide();
  },
  showComplete: function() {
    $('.todo-item').not('.complete').hide();
    $('.todo-item.complete').show();
  }
}