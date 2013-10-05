/*
 * var listItems = function (text) {
 var result = [];
    for(var index = 0; index < text.length; index++) {

        var = newData =
        var completed = '';
        var checked = '';
        
    }
    document.write('<li>' + text[i] + '</li>');
    return result;
}
*/ 

$(document).ready(function() {
 
    $('#add_todo').click( function() {
        var todoDescription = $('#todo_description').val();
        $('.todo_list').prepend('<div class='todo'>'
                    + '<div>'
                        + '<input class='check_todo' name='check_todo' type='checkbox' />'
                    +'</div>'
                    +'<div class='todo_description'>'
                        + todoDescription
                    + '</div>'
                + '</div>);
        $('#todo_form')[0].reset();
});
                         
$('.check_todo').unbind('click');
$('.check_todo').click( function() {
    var todo = $(this).parent().parent();
    todo.toggleClass('checked');
});   
    
return false;