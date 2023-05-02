/* Exercice 2:
 * Create a function displaying every seconds passed
 * since it opened.
 * Display is refreshed every second.
 * If 60 seconds are elapsed: write "a minute has passed",
 * then "2 minutes have passed", etc.
 */
var i = 0;
function scndTimer() {
    setInterval(function() { //start to count seconds
        console.log((i++)+" s.");
        if (i > 59){ //it restart every 60 seconds
            i = 0;
        }}, 1000);  
  }
 
  scndTimer()

  //display the first Minute
  function aMinPassed(){
    console.log("A minute Passed")
  }
  setTimeout(aMinPassed,6000);

//display other minutes
min = 2;
setTimeout((function minTimer() {
    setInterval(function() { //start to count seconds
        console.log((min++)+" minutes has passed");
        }, 6000);}),6000); 
