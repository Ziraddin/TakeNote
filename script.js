
var i=0;
var clickedColourPattern = [];


$(".textarea").keyup( function (){


  $(".counter").text($(".textarea").val().length+"/200");
})


$(".adD").click(function (){

     note();
     $(".del").css("visibility","hidden");
})

$(".colour_").click( function (){

    var clickedColour = $(this).attr("id");
    clickedColourPattern.push(clickedColour);
    $(this).addClass("pressed");
    $(".textarea").css("color",$("#"+clickedColour).css("color")).focus();
    if(clickedColourPattern.length==2)
    {
    $("#"+clickedColourPattern[0]).removeClass("pressed");
    clickedColourPattern.shift();
    console.log(clickedColourPattern);
  }



})

function note(){


  $(".notes").append("<div class='note'></div>");
  $(".note:eq("+i+")").fadeOut("fast").fadeIn("slow").css("box-shadow","4px 7px 4px black").css("transition","0.6s");
   $(".note:eq("+i+")").text($("#message").val()).css("color",$(".textarea").css("color"));
   $("#message").val("");
   i++;

}



function delete_sign(){


     for( let d=0;d<i;d++){

       $(".note:eq("+d+")").append("<button class='del btn'>-</button>");
     }
}


$(".delete").click(function (){

  delete_sign();

  $(".del").click(function (){

    $(this).parent().css("display","none");
    $(".del").css("visibility","hidden");
  })

})
