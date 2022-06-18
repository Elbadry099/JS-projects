// get elements into variable

const inputEle = document.getElementById('input');
const buttonEle = document.getElementById('btn');
const msgEle = document.getElementById('msg');


//Events

buttonEle.onclick = function() {

    //get value from input
    const inputValue = inputEle.value;
    console.log(inputValue);

    if (inputValue !="") {
        // put input value into P
        msgEle.innerHTML = inputValue;
        
        //empty input value
        inputEle.value = '';    
    }

}
