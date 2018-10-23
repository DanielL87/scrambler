var scrambler = function(sentence){

  var splitsent = sentence.split("");

  for (x=0; x < splitsent.length; x++){
    if (splitsent[x] == "a" || splitsent[x] == "e" || splitsent[x] == "i" || splitsent[x] == "o" || splitsent[x] == "u"){
    splitsent[x] =  "-";
    }
  }
  return splitsent.join("");
}



$(document).ready(function() {
  $("form#Phrase").submit(function(event){
    var userInput = $("#words").val();
    var scrambled = scrambler(userInput);
    $("#output").text("New Phrase is " + scrambled);

  event.preventDefault();
  });
});
