let input=document.querySelector('#input');
let submit=document.querySelector('#submit');
let msg=document.querySelector('.message');
const minValue=1;
const maxValue=10;
let win=3;
let guessLeft=3;


submit.addEventListener('click',checkNumber);

function checkNumber(){
    let guess=parseInt(input.value);
    // console.log(guess);

    if(isNaN(guess) || guess<minValue || guess>maxValue)
        setMsg("Pls enter a number a between 1 to 10",'red');
    
    if(guess===win)
        input.disabled=true;
        input.style.borderColor='green';
        setMsg(`${win} is correct!!`,'green');
}


function setMsg(message,color){
    msg.style.color=color;
    msg.textContent=message;    
}