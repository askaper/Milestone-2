$(function(){

  num = 3;
  $('form').on('submit', function(){

    num++

    var importance = $('option:selected').val();

    var info = $('input#create-text').val();

    var label = $('<label>');
    label.attr('for', 'task-' + num);
    label.addClass('text');
    label.append(info);

    var checkbox = $('<input>');
    checkbox.attr('id', 'task-' + num);
    checkbox.attr('type', 'checkbox');

    var div = $('<div>');
    div.addClass('task');
    div.append(checkbox).append(label);
    div.addclass(importance);

    $('#tasks').append(div)

  });

$('#show-completed').on('click', function() {
  if ($('#show-completed').is(':checked')){
      $('.task > input:checked').parent().show();
    } else {
      $('.task> input:checked').parent().hide();
    }
  }
})

function hideCompleted() {
  if (!$('#show-completed').is(':checked')) {
    $('.task > input:checked').parent().hide();
  }
}

$('div > input').on('click', hideCompleted);

});
