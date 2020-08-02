const selections = [{sign:"r", img:"stones.png"}, {sign:"p", img:"paper.png"}, {sign:"s", img:"scissors.png"}];
const clock = document.getElementById("clock");
const paper = document.getElementById("p");
const rock = document.getElementById("r");
const scissors = document.getElementById("s");
const results = document.getElementById("results");
const srpimg = document.getElementById("show");
const btns = document.getElementById("btns");
const pointBox = document.getElementById("markpoint");
var time = 13;
var selected = false;
var change = 1;

const bot =(s)=>{
var random = Math.floor(Math.random()* 3);
return [s[random].sign, s[random].img];
}

const decided = ()=>{
var r = [rock, paper, scissors];
for(let i = 0; i<r.length; i++){
    r[i].remove();
}
}

const press = ()=>{
    selected = true;
}

const selection = (srp)=>{
 var botSelect = bot(selections);
 const battle = srp.concat(botSelect[0]);
 var select;
 
 switch(battle){
     case "rp":
     case "ps":
     case "sr":
         select = "you lose";
          localStorage.setItem("xp",Number(localStorage.getItem("xp")) - 10);
          
          break;
     case "rr":
     case "pp":
     case "ss":
         select = "draw"
         localStorage.setItem("xp",Number(localStorage.getItem("xp")) + 0);
         break;
         break;
     case "rs":
     case "pr":
     case "sp":
         select = "you win";
         localStorage.setItem("xp",Number(localStorage.getItem("xp")) + 20);
         break;
 }
 

 setInterval(() => {
     $(function(){
         results.innerHTML = select;
         pointBox.innerHTML = `${localStorage.getItem("xp")}XP`;
         $("#botimg").attr("src", `${botSelect[1]}`);
         $("#botimg").animate({top: "300px" , right: "200px"}, 800);

        })
 }, 2000);
}

$(document).ready(function(){
$("#rock, #paper, #scissors").attr("style", "display:none");
    $("#r").click(function () { 
        selection("r");
    decided();
    press();
    $("#rock").show(1000);
    $("#rock").animate({position: "absolute", top:"300px", left: "200px"}, 800);
    
    });
    $("#s").click(function () { 
        selection("s");
    decided();
    press();
    $("#scissors").show(1000);
    $("#scissors").animate({position: "absolute", top:"300px", left: "200px"}, 800);
    });

    $("#p").click(function () { 
        selection("p");
    decided();
    press();
    $("#paper").show(1000);
    $("#paper").animate({position: "absolute", top:"300px", left: "200px"}, 800);
    });
    $("#rel").click(function () { 
        window.location.reload(true);
    });

    $("#rel").mouseover(function () { 
        $(this).animate({width:"150px", height:"90px", color:"#f94144"}, 500);
    });

    $("#rel").mouseleave(function () { 
        $(this).animate({width:"100px", height:"50px", color:"#f94144"}, 500);
    });
});
const recharge =(n)=>{
   return new Promise((resolve, reject)=>{
        if(n == 0){
        reject(0);
        }else{
            resolve(1000);
        }
   })
}

const timer =()=>{
 setInterval(()=>{
var color = time<= 5 ? "#43aa8b": "#90be6d";
  time -= change;
  clock.style.color = color;
  if(time> -1){
  clock.innerHTML = time;
  }
  if(time == 0){
    
    clock.innerHTML = "time ups";
    selection("r");
    decided();
    $("#rock").show(1000);
    $("#rock").animate({position: "absolute", top:"300px", left: "200px"}, 800);
    
  }
   if(selected == true){
       change = 0;
      
   }
 },1000)
}
timer()

if(localStorage.getItem("xp") === null){
    localStorage.setItem("xp", 0);
    pointBox.innerHTML = `${localStorage.getItem("xp")}XP`;
}else{
    pointBox.innerHTML = `${localStorage.getItem("xp")}XP`;
}


 






