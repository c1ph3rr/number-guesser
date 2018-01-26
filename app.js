let input=document.querySelector('#input');
let submit=document.querySelector('#submit');
let msg=document.querySelector('.message');
let reset=document.querySelector('#reset');
const minValue=1;
const maxValue=10;
let winNum=Math.floor(Math.random()*(10-1+1)+1);
let guessLeft=3;


submit.addEventListener('click',checkNumber);

reset.addEventListener('click',playAgain);

function checkNumber(){
    let guess=parseInt(input.value);

    if(isNaN(guess) || guess<minValue || guess>maxValue){
        setMsg("Pls enter a number a between 1 to 10",'red');
        return;
    }

    
    if(guess===winNum) {
        input.disabled=true;
        input.style.borderColor='green';
        setMsg(`${winNum} is correct. You win!!`,'green');
    }
    else{
        guessLeft-=1;
        if(guessLeft===0){
            input.disabled=true;
            input.style.borderColor='red';
            setMsg(`GAME OVER, you lost. The correct number was ${winNum}`,'red');   
        }
        else{
            input.style.borderColor='red';
            input.value='';
            setMsg(`${guess} is not correct,${guessLeft} guesses left`,'red');
        }
    }
}


function setMsg(message,color){
    msg.style.color=color;
    msg.textContent=message;    
}


function playAgain(){
    window.location.reload();
}

