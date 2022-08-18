let recycleInput;
let getLink = document.getElementById("linktg");
let numField = document.getElementById("numField");
let subButton = document.getElementById("subButton");
subButton.onclick = function (){
    if(numField.value == "1" || numField.value == "2"){
        getLink.setAttribute("href" , "recyclable.html");
    }
    else if(numField.value == "3" || numField.value == "4" || numField.value == "5" || numField.value == "6" || numField.value == "7"){
        getLink.setAttribute("href" , "nonrecyclable.html");
    }
    else{
        getLink.setAttribute("href", "#");
    }
}


// function getNum() {
    // let numField = document.getElementById('numField').value;

//     let a = document.createElement("a");
//     let link = document.createTextNode("Click to learn about the type");
//     a.appendChild(link);
//     a.title = "Click to learn about the type";
//         if(numField == 1 || numField == 2){
//             a.href = "recyclable.html";
//         }
//         else{
//             a.href = "nonrecyclable.html";
//         }
//     }
//     document.body.appendChild(a);

//     let subButton = document.getElementById('subButton');
//     subButton.addEventListener('click', getNum, false); 