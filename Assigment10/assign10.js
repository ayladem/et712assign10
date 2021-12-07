const box1=document.querySelector('.box1')
const box2=document.querySelector('.box2')
const box3=document.querySelector('.box3')
let diceMP1=document.querySelector('.dice1')
let diceMP2=document.querySelector('.dice2')
let diceMP0=document.querySelector('.dice0')
let dice0r=document.querySelector('.dice0r')
const buttonfP=document.querySelector('.check2')
const buttonSP=document.querySelector('.check3')
const img=document.querySelector('.winner')

let player1FirstNum=Math.trunc(Math.random() * 6 + 1);
let player1SecNum=Math.trunc(Math.random() * 6 + 1);

let player2FirstNum=Math.trunc(Math.random() * 6+ 1);
let player2SecNum=Math.trunc(Math.random() * 6 + 1);

buttonfP.classList.remove('hidden')
buttonSP.classList.remove('hidden')
diceMP1.classList.remove('hidden')
diceMP2.classList.remove('hidden')
diceMP0.classList.remove('hidden')
dice0r.classList.remove('hidden')

const totalAr=[]

buttonfP.addEventListener('click',function (){

console.log(player1FirstNum)
console.log(player1SecNum)

let totalnum1=player1FirstNum+player1SecNum;
diceMP1.textContent=` ${player1FirstNum} ,  ${player1SecNum} `;

console.log(totalnum1)
 totalAr.push(totalnum1)
 let total=0;

for(i=0; i<totalAr.length;i++){
total+=totalAr[i];
}if(total<16){
    diceMP0.textContent=`Player One Score ${total} `; 
    buttonSP.classList.remove('hidden')

}
 
if(total>=16){
diceMP1.textContent=`${player1FirstNum} , ${player1SecNum}   Player One, Congratulations!!! `;
diceMP0.textContent=`Player One Score ${total}`; 
img.classList.remove('hidden')
buttonSP.classList.add('hidden')
}

reset();
buttonfP.classList.add('hidden')
})

const totalAr2=[];
buttonSP.addEventListener('click',function (){
 
    console.log(player2FirstNum)
    console.log(player2SecNum)
    let totalnum2=player2FirstNum+player2SecNum;
    diceMP2.textContent=` ${player2FirstNum} , ${player2SecNum} `;
    
    console.log(totalnum2)
    totalAr2.push(totalnum2)
    let total2=0;
    for(i=0; i<totalAr2.length;i++){
        total2+=totalAr2[i];
        }if(total2<16){
            dice0r.textContent=`Player Two Score ${total2}`; 
        buttonfP.classList.remove('hidden')
        }
        if(total2>=16){
            diceMP2.textContent=` ${player2FirstNum} , ${player2SecNum}  Player Two, Congratulations!!! `;
            dice0r.textContent=`Player Two Score ${total2}`; 
            img.classList.remove('hidden')
            buttonfP.classList.add('hidden')
            }
        reset();
        buttonSP.classList.add('hidden')
        
    })
  
    function reset(){
        player1FirstNum=Math.trunc(Math.random() * 6 + 1);
        player1SecNum=Math.trunc(Math.random() * 6 + 1);
        player2FirstNum=Math.trunc(Math.random() * 6 + 1);
        player2SecNum=Math.trunc(Math.random() * 6 + 1);
    }