
var cryptosquare = function(side1, side2, side3) {
  return true;
};

describe('triangleTracker', function() {
  it("is false when any 2 sides are less than or equal to the third", function() {
    expect(triangleTracker(2,3,6)).to.equal(true);
  });


});






/*Possible Behaviors
-1)set input to a string > input to string
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
for (i = 0; i = columns; i++) {
  for (i = 0; i <= variable.length; i+= columns) {
    var encodedString += str.charAt(i);
  }
}

5) split result of concatination into groups of 5
