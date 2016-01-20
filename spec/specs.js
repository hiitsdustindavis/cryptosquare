describe('cryptosquare', function(textString) {
  it("is false if string contains spaces and punctuation", function() {
    expect('cryptosquare'(newString).to.equal(true));
  });


});




/*Possible Behaviors

0) replace spaces and punctuation > .replace(/[^\w\s]|_/g, "")
                                    .replace(/\s/g, "");
1) convert all characters to lowercase > .tolowercase
2) set character count to a variable > stringCount = variable.length
3) calculate number of character rows & columns >

 for (i = 0; i < variable.length; i++) {
   if i * i = variable.length{
     columns = i
    }
    else {
      columns = sqrt(variable.length).toFixed(0) + 1;
    }
  }

4) concatinate index 0 + column length index number >
for (i = 0; i < columns; i++) {
  for (i = 0; i <= variable.length; i+= columns) {
    var encodedString += str.charAt(i);
  }
}

5) split result of concatination into groups of 5
return str.match(/.{1,5}/g); //first number is smallest chunk to return, second number is regular chunk size
*/
