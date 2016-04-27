
//(after document is ready)When element with class "button" is clicked, then run the following function: Select the current button ("this"), find the next sibling with the class "answer," and toggle it in the display. //
$(document).ready(function() {
  $('.button').click(function(){
    $(this).next('.answer').toggle();
  });
});
