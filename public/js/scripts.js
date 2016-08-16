$(function(){
  

  //Labels UI
    //ADD NEW LABEL
  $('.btn-add').on('click', function(){
    var askLabel = prompt("Please enter label name");
    //if there is nothing enter, add non breakable space to keep size and width of the button.
    if(askLabel === "" || askLabel === null) {
      askLabel = "&nbsp";
    }
    var newLabel = ('<button class="btn btn-blue btn-blue-new">' + askLabel + '</button>'); 
    $(newLabel).insertBefore(this);
  })


    //ADD-REMOVE DESCRIPTION
      //show description
  $('.btn-edit-description').on('click', function(){
    $(this).hide();
    $(".description").show(200);

  });
      //hide description
  $('.btn-close-description').on('click', function(){
      closeDescription();
  })    
      //on buton save
  $('.btn-save-description').on('click', function() {
      checkUserDescription();
      var userDescription = $('.description-area').val();
      $('.description-entered').text(userDescription);
      $('.description-entered').show();



  })

      //check is user entered something in description
  function checkUserDescription() {
    if($('.description-area').val().replace(/^\s+/, "") === "") {
      closeDescription();
    } else {
      $('.description-outter').hide();
      $('.description-options').show();

    }
  }
      //function to close description
  function closeDescription(){
    $('.description').hide(50);
    $('.btn-edit-description').show();
  }

  $('.btn-edit-saved').on('click', function(){
    $('.description-entered').hide();
    $('.description-outter').show();

  })





}); //END OF JQUERY