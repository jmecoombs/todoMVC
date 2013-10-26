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
    if(ev.which === 13) {
      var label = $('.new-todo').val();
      var newItem = $('.templates .todo-item').clone();
      newItem.find('label').text(label)
      newItem.appendTo('.todo-list');
      $('.new-todo').val('');
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