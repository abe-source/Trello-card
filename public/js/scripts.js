$(function(){
  

  //Labels UI
    //add new label
  $('.btn-add').on('click', function(){
    var askLabel = prompt("Please enter label name");
    //if there is nothing enter, add non breakable space to keep size and width of the button.
    if(askLabel === "" || askLabel === null) {
      askLabel = "&nbsp";
    }
    var newLabel = ('<button class="btn btn-blue btn-blue-new">' + askLabel + '</button>'); 
    $(newLabel).insertBefore(this);
  })










}); //END OF JQUERY