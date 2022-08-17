let recycleInput;

function getNum() {
    let numField = document.getElementById('numField').value;

    let a = document.createElement("a");
    let link = document.createTextNode("Click to learn about the type");
    a.appendChild(link);
    a.title = "Click to learn about the type";
        if(numField == 1 || numField == 2){
            a.href = "recyclable.html";
        }
        else{
            a.href = "nonrecyclable.html";
        }
    }
    document.body.appendChild(a);

    let subButton = document.getElementById('subButton');
    subButton.addEventListener('click', getNum, false); 