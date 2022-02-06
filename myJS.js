/*
* Excercise 1
*
*/
let isRed = true;
const idColor = document.querySelector('#color-block');
const colorName = document.querySelector('#color-name');
const tempInput = document.querySelector('#f-input');
const tempButton = document.querySelector('#convertbtn');
const tempOutput = document.querySelector('#c-output');

/*
* Then write a function that changes the text and the color inside the div
*
*/
idColor.addEventListener('click',(event)/*parameter*/  => {
    changeColor();
    console.log('this is a test.');
});

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(isRed){
        //change the background color using JS
        //Change the text of the color using the span id color-name
        idColor.style.backgroundColor = 'blue';
        colorName.textContent = 'blue';
        isRed = false;
    } else {
        //change the background color using JS
        idColor.style.backgroundColor = '#F08080';
        //Change the text of the color using the span id color-name
        colorName.textContent = '#F08080';
        isRed = true;
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
tempButton.addEventListener('click', (event) => {
    //console.log(tempInput.value);
    let convertedTemp = convertTemp(tempInput.value);
    tempOutput.textContent = `${convertedTemp}`;
})

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(tempf){
    //Calculate the temperature here
    //Send the calculated temperature to HTML
    return ((tempf - 32) * 5) / 9;

}