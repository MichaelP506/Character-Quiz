var counter = 0;

var quesOne;

var quesTwo;

$(".cloudGif").hide();

$(".scale").hide();

$(".speed").hide();

$(".nextOne").hide();

$(".fighter").hide();

$(".nextTwo").hide();

$(".weapon").hide();

$(".results").hide();

$(".finish").hide();

$(".ikeGif").hide();

$(".lucinaGif").hide();

$(".cptFalcon").hide();

$(".sonicGif").hide();

$(".yoshiGif").hide();

$(".kirbo").hide();

$(".samusGif").hide();

$(".dhGif").hide();

$(".mkGif").hide();

$(".mmGif").hide();

$(".error").hide();

$(".winner").hide();

$(".retake").hide();

$(".go").click(function() {
$(".scale").show();
    $(".go").hide();
    $(".speed").show();
    $(".nextOne").show();
});

$(".nextOne").click(function() {
    quesOne = $(".scale").val();
    if(parseInt(quesOne) >= 1 && (parseInt(quesOne) <= 10)) {
    $(".speed").hide();
    $(".fighter").show();
    $(".nextTwo").show();
    $(".nextOne").hide();
    $(".scale").hide();
    $(".weapon").show();
	$(".error").hide();
        $(".scale").val("");
    }
    else 
{
    $(".error").show();
    $(".message").text("Error: Your answer was invalid. Try again!");    
}
       });

$(".nextTwo").click(function() {
    quesTwo = $(".weapon").val();
    if(quesTwo === "sword" || quesTwo === "ranged" || quesTwo === "melee") {
    $(".fighter").hide();
    $(".nextTwo").hide();
    $(".weapon").hide();  
    $(".finish").show();
    $(".error").hide();
        $(".weapon").val("");
    }
    else 
{
    $(".error").show();
    $(".message").text("Error: Your answer was invalid. Try again!");
}
});

$(".finish").click(function() {
        counter = counter + 1;
	if(parseInt(quesOne) >= 5 && (parseInt(quesOne) < 7 && quesTwo === "sword"))
{
$(".cloudGif").show();
    $(".winner").show();
    $(".finish").hide();
    $(".retake").show();
}
	else if(parseInt(quesOne) < 5 && quesTwo === "sword")
{
$(".ikeGif").show();
    $(".winner").show();
    $(".finish").hide();
    $(".retake").show();
}
	else if(parseInt(quesOne) >= 7 && (parseInt(quesOne) <= 8 && quesTwo === "sword"))
{
$(".lucinaGif").show();
    $(".winner").show();
    $(".finish").hide();
    $(".retake").show();
}
    else if(parseInt(quesOne) > 8 && quesTwo === "sword")
{
$(".mkGif").show();
    $(".winner").show();
    $(".finish").hide();
    $(".retake").show();
}
    else if(parseInt(quesOne) === 7 && quesTwo === "melee")
{
$(".cptFalcon").show(); 
    $(".winner").show();
    $(".finish").hide();
    $(".retake").show();
}
    else if(parseInt(quesOne) > 7 && quesTwo === "melee")
{
$(".sonicGif").show();
    $(".winner").show();
    $(".finish").hide();
    $(".retake").show();
}
    else if(parseInt(quesOne) < 7 && (parseInt(quesOne) >= 5 && quesTwo === "melee"))
{
$(".yoshiGif").show();
    $(".winner").show();
    $(".finish").hide();
    $(".retake").show();
}
    else if(parseInt(quesOne) < 5 && quesTwo === "melee")
{
$(".kirbo").show();   
    $(".winner").show();
    $(".finish").hide();
    $(".retake").show();
}
    else if(parseInt(quesOne) === 5 && quesTwo === "ranged")
{
$(".samusGif").show(); 
    $(".winner").show();
    $(".finish").hide();
    $(".retake").show();
}
    else if(parseInt(quesOne) > 5 && quesTwo === "ranged")
{
$(".dhGif").show();
    $(".winner").show();
    $(".finish").hide();
    $(".retake").show();
}
    else if(parseInt(quesOne) < 5 && quesTwo === "ranged")
{
$(".mmGif").show();
    $(".winner").show();
    $(".finish").hide();
    $(".retake").show();
}
    else{
        $(".error").show();
        $(".message").text("Error: Your answer was invalid. Try again!");
    }
    
$(".retake").click(function() {
    $("img").hide();
    $(".retake").hide();
    $(".winner").hide();
    $(".go").show();

    $(".count").text("Test taken " + counter + " times");
});
});