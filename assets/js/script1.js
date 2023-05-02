/* Exercice 1:
 * Display the Wilson-2 name using setInterval
 * Then clear it when the name is fullu displayed
 */

const sectionName = ["W","i","l","s","o","n","-","2"];
let index = 0;
let interval = setInterval(displaySectionName,1000);

//Function to display the strings contained in the array
function displaySectionName(){
    console.log(sectionName[index++ % sectionName.length]);
  
    //clear it when displayed
    
    if (index >= 8){
        clearInterval(interval);
    }
}
