let score = 0;

let t1 = document.querySelector("#t1");
let f1 = document.querySelector("#f1");
let ans1 = false;
t1.onclick = function(){
    f1.style.backgroundColor = "#64A994";
    t1.style.backgroundColor = "#d5e8e2";
    ans1 = true;
}
f1.onclick = function(){
    t1.style.backgroundColor = "#64A994";
    f1.style.backgroundColor = "#d5e8e2";
    if(ans1 == false){
        score++;
    }
    ans1 = true;
}

let t2 = document.querySelector("#t2");
let f2 = document.querySelector("#f2");
let ans2 = false;
t2.onclick = function(){
    f2.style.backgroundColor = "#64A994";
    t2.style.backgroundColor = "#d5e8e2";
    if(ans2 == false){
        score++;
    }
    ans2 = true;
}
f2.onclick = function(){
    t2.style.backgroundColor = "#64A994";
    f2.style.backgroundColor = "#d5e8e2";
    ans2 = true;
}

let t3 = document.querySelector("#t3");
let f3 = document.querySelector("#f3");
let ans3 = false;
t3.onclick = function(){
    f3.style.backgroundColor = "#64A994";
    t3.style.backgroundColor = "#d5e8e2";
    ans3 = true;
}
f3.onclick = function(){
    t3.style.backgroundColor = "#64A994";
    f3.style.backgroundColor = "#d5e8e2";
    if(ans3 == false){
        score++;
    }
    ans3 = true;
}

let t4 = document.querySelector("#t4");
let f4 = document.querySelector("#f4");
let ans4 = false;
t4.onclick = function(){
    f4.style.backgroundColor = "#64A994";
    t4.style.backgroundColor = "#d5e8e2";
    if(ans4 == false){
        score++;
    }
    ans4 = true;
}
f4.onclick = function(){
    t4.style.backgroundColor = "#64A994";
    f4.style.backgroundColor = "#d5e8e2";
    ans4 = true;
}

let submitRef = document.querySelector("#submit");
let scoreRef = document.querySelector("#score");
submitRef.onclick = function(){
    scoreRef.innerHTML = "Your Score: "+score+"/4";
}
