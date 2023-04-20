function show(){
    var name=prompt("Enter Name "," ");
    var displayMessage="<h1>"+name+"</h1>";
    // document.getElementById("display").innerHTML=displayMessage;
    // $("#display").html(displayMessage);
    $("#display").text(displayMessage);
}

jQuery(document).ready(show);