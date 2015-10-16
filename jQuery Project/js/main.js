
$(function(){

  num = 3;

  // 1) type plain text pertaining the task
  // 2) select importance of task
  // 3) uclick button
  // 4) adds element to the list
  // 5) on the list of tasks, the user can then click a checkbox striking through the task to show completion
  // **Need the importance of the task to be attached to the output into the


  //Labels need to be applied to new tasks with low and high importance so their checkboxes can be clicked


  $('#create-btn').on('click', function() {
      num++;
      var rank = $('select#create-importance').val()
      var text = $('input#create-text').val()
      var div = $('<div>').attr('class', 'text')
      var input = $('<input>').attr('id', 'task-' + num)
      var label = $('<label>')
      div.attr('class', 'task')
      label.attr('for', 'task-' + num)
      label.attr('class', 'text')
      label.attr('for', 'task-' + num)
      input.attr('type', 'checkbox')
      div.append(input)
      div.append(label)
      label.text(text)
      div.addClass(rank)
      $('section').append(div)

      console.log('This works')
  })

$('#show-completed').on('click', function() {
  if ($('#show-completed').is(':checked')){
      $('.task > input:checked').parent().show();
    } else {
      $('.task> input:checked').parent().hide();
    }
})

function hideCompleted() {
  if (!$('#show-completed').is(':checked')) {
    $('.task > input:checked').parent().hide();
  }
}

$('div > input').on('click', hideCompleted);

});
