/*Create a JavaScript function called "multiplicationTable" 
that takes a single argument "num" (an integer) as input.
Inside the function, create a for loop that iterates from 1 to 10.
Inside the loop, multiply the current iteration number by the input "num" 
to generate the product.
Log the product to the console in the format "num x iteration = product". */

function multiplicationTable(num) {
  for (var i = 1; i <= 10; i++) {
    var product = num * i;
      console.log(num + " x " + i + " = " + product);
  }
}

multiplicationTable(3);
// multiplicationTable(5);
// multiplicationTable(10);
// multiplicationTable(15);
// tested by all three different parametre
