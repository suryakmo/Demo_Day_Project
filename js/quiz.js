let score = 0;

let true1 = document.querySelector("#t1");
let false1 = document.querySelector("#f1");
let ans1 = false;
true1.onclick = function(){
    ans1 = true;
}
false1.onclick = function(){
    if(ans1 == false){
        score++;
    }
    ans1 = true;
}

let t2 = document.querySelector("#t2");
let f2 = document.querySelector("#f2");
let ans2 = false;
t2.onclick = function(){
    if(ans2 == false){
        score++;
    }
    ans2 = true;
}
f2.onclick = function(){
    ans2 = true;
}

let t3 = document.querySelector("#t3");
let f3 = document.querySelector("#f3");
let ans3 = false;
t3.onclick = function(){
    ans3 = true;
}
f3.onclick = function(){
    if(ans3 == false){
        score++;
    }
    ans3 = true;
}

let t4 = document.querySelector("#t4");
let f4 = document.querySelector("#f4");
let ans4 = false;
t4.onclick = function(){
    if(ans4 == false){
        score++;
    }
    ans4 = true;
}
f4.onclick = function(){
    ans4 = true;
}

let submitRef = document.querySelector("#submit");
let scoreRef = document.querySelector("#score");
submitRef.onclick = function(){
    scoreRef.innerHTML = "Your Score: "+score+"/4";
}
