$(document).ready(function(){
 
  const table = $("#pixelCanvas");

    var height = $('#inputHeight');
    var weight = $('#inputWeight');
    var color;
  /*
  The following is called when size is submitted by 
  the user, look for the element input[type='submit'],
  and attach an event listener to it.
*/
$("input[type='submit']").click(function (event) {
   //prevent the default button action 
  event.preventDefault();
    //call the make grid function
  makeGrid();
}); 
  
//This function is callled when the submit button is clicked
function makeGrid() {
  
 let rows =height.val() ;
 let cols =weight.val();


//delete existing canvas  
$('#pixelCanvas').children().remove();

/*
Check if the sizes of inputed rows and columns are greater than 0 
If negative give an error popup
*/
if(rows <= 0 || cols <= 0){
  alert("Invalid input, please input height and width values greater than 0");
  return true;
}
 
  //based on the user input height add i number of rows to the table with id "pixelCanvas" 
    for (let i = 0; i < rows; i ++) {
        $('#pixelCanvas').append('<tr></tr>');
        };
  //based on the user input width add Y number of columns (cells) to every row 
    for (let y = 0; y < cols; y++) {
            $('tr').append('<td></<td>');
        };

    //when a cell is clicked change the color to that which has been set by the user
    $('td').click( function () {
     color = $('#colorPicker').val();
        $(this).attr("bgcolor", color);
    });
  
  //this calls a function to clear the color of a cell on double click by turning it back to white
$('td').on("dblclick",function(){
    $(this).attr("bgcolor", "white");
    });
 }

})