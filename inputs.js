
var txtOutput = "";
var txtAreaOutput = "";
var CheckboxOutput = false;
var radiodata = "";

$(document).ready(function(){
    
    $("#button1").click(function(){	
    var txtOutput = $("#txtName").val();
    $('#txtOutput').text(txtOutput); 
    });

    $("#button2").click(function(){	
    var txtAreaOutput = $("#textAreaName").val();
    $('#txtAreaOutput').text(txtAreaOutput); 
    });

    $('input[type="checkbox"]').click(function(){
    var CheckboxOutput = $("#CheckboxName").val();
    $('#CheckboxOutput').text(CheckboxOutput); 
    });

    $('#radioButton').on('change', function() {
    var radiodata = $('input[name="myRadio"]:checked', '#myForm').val();
    $('#radiodata').text(radiodata);  
    });

});



/*(function() {
'use strict';
var checkboxdata = false;
var txtName = "";
var SelectOutput = "";
DisplayInputs();



//=======================================================




  function processText(){
  var txtName = document.getElementById('txtName').addEventListener('click', processText);
  var txtOutput = document.getElementById("txtOutput");
  var name = txtName.innerHTML;
  txtOutput.innerHTML = name
  } 

  function processSelect(evt){
  var SelectName = document.getElementById("SelectName");
  var SelectOutput = document.getElementById("SelectOutput");
  var Selectname = SelectName.value;
  SelectOutput.value = SelectName
  console.log (SelectOutput);
  evt.preventDefault( );
  } 

 function processCheckbox(){
  //document.getElementById('messageCheckbox').checked;
  var CheckboxName = document.getElementById("CheckboxName");
  var CheckboxOutput = document.getElementById("CheckboxOutput");
  var CheckboxName = CheckboxName.value;
  CheckboxOutput.value = CheckboxName
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