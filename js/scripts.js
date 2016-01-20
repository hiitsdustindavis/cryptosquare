/*var cryptosquare = function() {
  $("#form").submit(function(event) {
    var textString = $("#textString").val();
    var newString = (textString).replace(/[^\w\s]|_/g, "").replace(/\s/g, "").toLowerCase();
  })
};*/


$(function() {
  $("#form").submit(function(event) {
    var textString = $("#textString").val();
    var newString = (textString).replace(/[^\w\s]|_/g, "").replace(/\s/g, "").toLowerCase();

    var stringCount = newString.length;
    var columns = 0;

    for (i = 0; i < stringCount.length; i++) {
      if ((i * i)=== stringCount.length){
        var columns = i;
       }
       else {
         var columns = Math.sqrt(stringCount.length).toFixed(0) + 1;
       }
     }

     for (i = 0; i < columns; i++) {
       for (i = 0; i <= stringCount.length; i+= columns) {
         var encodedString = encodedString + str.charAt(i);
       }
     }
     var encodedString = str.match(/.{1,5}/g);

    $("#result").text(encodedString);

    event.preventDefault();
  });
});
