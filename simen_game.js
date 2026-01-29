
let gameseq=[];
let userseq=[];

let started=false;
let level=0;

let btns=["red","yellow","green","purple"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");    
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");    
    },250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*4);
    let randColor=btns[randidx];
    let randbtn=document.querySelector(`.${randColor}`);
    userflash(randbtn);
    // console.log(randidx);
    // console.log(randColor);
    // console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randbtn);
}
function checkAns(idx){
   // console.log("curr level:",level);

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelUp,1000);
    }
}
    else{
        h2.innerHTML=`Game Over! your score was <b> ${level} </b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="Red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150);
        reset();
    }
}


function btnpress(){
    let btn=this;
    userflash(btn);

    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}