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

