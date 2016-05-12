(function() {
'use strict';
var checkboxdata = false;
var txtName = "";
var SelectOutput = "";
DisplayInputs();



//=======================================================

 function processCheckbox(){
  var CheckboxName = document.getElementById("CheckboxName");
  var CheckboxOutput = document.getElementById("CheckboxOutput");
  var CheckboxName = CheckboxName.value;
  CheckboxOutput.value = CheckboxName
  } 


  function processText(){
  var txtName = document.getElementById("txtName");
  var txtOutput = document.getElementById("txtOutput");
  var name = txtName.value;
  txtOutput.value = name
  } 

  function processSelect(evt){
  var SelectName = document.getElementById("SelectName");
  var SelectOutput = document.getElementById("SelectOutput");
  var Selectname = SelectName.value;
  SelectOutput.value = SelectName
  console.log (SelectOutput);
  evt.preventDefault( );
  } 

})
/*function checkbox( evt ) {
    var checkboxdata = document.getElementById("check").checked;
    processValue (checkboxdata) 
    evt.preventDefault( );
}

//function processValue (checkboxdata){
 //$(checkboxdata).text( value );


})


//console.log (checkboxdata);
//var val = $('#user-input').val();


/*function DisplayInputs( ) {
    displayValue( '#checkboxdata', checkboxdata );
    
}

   function displayValue( selector, value ) {
        if ( value === undefined ) {
            $( selector ).empty( );
        } else {
            $( selector ).text( value );
        }
    }

    })*/

     /* function ProcessText()
      {
        var textData = document.getElementById("textInput");
        var textName = nameElement.value;
        document.getElementById("textInput").innerHTML += theName;
      }*/