$(function(){
  

  //LABELS UI
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
      saveUserEntry();
  })
      //if user pres enter and textarea is open it saves user entered description
  $('.description-outter').keyup(function(event){
    if(event.keyCode == 13){
        saveUserEntry();
    }
});
      //function to save user entry
  function saveUserEntry() {
      checkUserDescription();
      var userDescription = $('.description-area').val();
      $('.description-entered').text(userDescription);
      $('.description-entered').show();
  }

      //check is user entered something in description
  function checkUserDescription() {
    if($('.description-area').val().replace(/^\s+/, "") === "") {
      closeDescription();
    } else {
      $('.description-outter').hide();
      $('.description-options').show();
      $('.description-entered').css("color", "#4d4d4d");

    }
  }
      //function to close description
  function closeDescription(){
    $('.description').hide(50);
    $('.btn-edit-description').show();
  }
      //when user pres edit or press directly on user desription textarea becomes visible
  $('.btn-edit-saved, .description-entered').on('click', function(){
    $('.description-entered').hide();
    $('.description-outter').show();
  })

  //CHECKLIST
      
      //add new checklist
      var idCounter = 4;
      //if user press add item button it hides it and shows textarea to enter button name.
      $('.add-item').on('click', function(){
        $('.add-checkbox').hide();
        $('.edit-checkbox-out').show();              
      });

     

      //when user pres add button it saves text area value and adds checklist with that value
      $('.btn-save-checkbox').on('click', function(){
        var checkBoxName = $('.save-checkbox').val();
        createCheckbox(checkBoxName);
        $('.save-checkbox').val("");
      });

      function createCheckbox(name) {
        //fallback if user didn't entered nothing or cancel prompt window.
        if (name === "" || name === null) {
          name = "&nbsp";
        }
        $('.checkbox').append('<br><input id="check' + idCounter + '" type="checkbox" name="check"><label for="check' + idCounter + '">' + name + '</label>');
        idCounter++;
      }

      //change checlist name  




      //dynamicly change checkbar depending of completed tasks






      //hide done tasks





      //show how many tasks is closed





      //delete all checklist







      // + bonus drag and drop item changing their place








}); //END OF JQUERY