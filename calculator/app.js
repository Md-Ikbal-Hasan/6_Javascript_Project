const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

//console.log(operationEl,equalEl,clearEl,clearLastEl);

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

//get the number and check dot validation
numbersEl.forEach(number => {
    number.addEventListener('click', (e)=> {
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;

        }
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    })
});

operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!dis2Num){ return; }
        haveDot = false;
        const operationName = e.target.innerText;
        if(dis2Num && dis1Num && lastOperation){
            mathOperation();
        }else{
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);


    })
});

function clearVar(name = ''){
    dis1Num += dis2Num + ' ' +name+ ' ';
    display1El.innerText = dis1Num;
    display2El.innerText= '';
    dis2Num = '';
    tempResultEl.innerText = result;

}

function mathOperation(){
    if(lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    }else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    }else if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num);
    }
};

equalEl.addEventListener("click", () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = "";
    dis2Num = result;
    dis1Num = "";
  });


  clearAllEl.addEventListener('click', (e) => {
      display1El.innerText='0';
      display2El.innerText='0';
      dis1Num='';
      dis2Num='';
      result='';
      tempResultEl.innerText='0';
  });

  clearLastEl.addEventListener('click', (e) =>{
      display2El.innerText= "";
      dis2Num= '';
  })