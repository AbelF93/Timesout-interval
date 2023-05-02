//setTimeOut exemeple
/*console.log("WARNING! In exactly five seconds something will explode");

function theExplosion() {
  console.log("BOOM!");
}

setTimeout(theExplosion, 5000);*/

//using an interval with an event
/*const bod = document.body ;
function theExplosion() {
    alert("BOOM!");
  }
  
  const button = document.createElement("button");
  button.textContent = "WARNING";
  button.addEventListener("click", () => {
    // this will delay the event by 5 seconds
    setTimeout(theExplosion, 5000);
  });
  bod.appendChild(button);*/

  // Using a recursion (function that's calling itself)
 
 /* let times = 0;
function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;

  const nextCall = Math.floor(Math.random() * 2000); // Random delay until heyYou() is called again
  setTimeout(heyYou, nextCall);
};

heyYou();*/


// setInterval works as setTimeout, but it's called repetitively

/*let times = 0;
function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

setInterval(heyYou, 1000);*/

// Clearing the interval or the timeout

let interval= setInterval(heyYou,500);;
let times = 0;

function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
  if(times > 8){ //add a condition to stop the Interval
    clearInterval(interval);
};
}

  function stopCalling(){ //function to stop it 
    clearInterval(interval);
  };


