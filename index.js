//'use strict';

var myArray = new Array;    // global variable, use javascript Array DOCTYPE

myArray = [10,3,6,4,2,9,7,3,7,3];   // hard code it here, make it dynamic later

alert ("Beginning Array is " + myArray);

var j;  // counter variable for outer for loop
var i;  // counter variable forinner for loop

for (j = 0; j < myArray.length-1; j++)    // outer for loop repeats the whole check-flip loop until all positions are processed
{
  // note that you always have 1 less check than the length of the array.  Easy example, array of length 2 has 1 check.
  for (i = 0; i < myArray.length-1; i++)  // inner for loop traverses the array one full time and flips as it goes
  {
    if (myArray[i] > myArray[i+1])  // Check current position against next position, flip thim if necessary
    {
        var temp = myArray[i];      // create temp var to hold value of one of the spots
        myArray[i] = myArray[i+1];
        myArray[i+1] = temp;
    } // end if
  } // end inner for loop
} // end outer for loop

alert ("Ending Array is " + myArray);
