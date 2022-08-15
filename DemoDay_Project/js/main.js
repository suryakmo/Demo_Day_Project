let recycleInput;

function getNum() {
    let numField = document.getElementById('numField').value;
    // let result = document.getElementById('result');
    
    //     result.textContent = 'Your number is: ' + numField;
        if(numField == 1 || numField == 2){
            recycleInput == true;
        }
        else{
            recycleInput == false;
        }
    }

    let subButton = document.getElementById('subButton');
    subButton.addEventListener('click', getNum, false); 