// JavaScript File
$(document).ready(function(){


    $("button").click(function(){
        var person = $("#password").val();
        
        if (person === "candy") {
            $("div").append("CONGRATULATIONS,YOU GUESSED IT!!!");
        } 
    });
});    
    
    
    
