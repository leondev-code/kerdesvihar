let time = 20;
let exittimer = 6;
let incorrect = false;
let currentq=0;
let score=0;

const question = [
    "",
    "2+2",
    "Melyik nincsen telefonon?",
    "Melyik szó magyar?",
    "Melyik a legjobb kvíz?",
    "melyik szomorú?",
    "Lehúzás a kahoot?",
    "mennyi 20+1?",
    "eddig jó volt?",
    "most hogy játszottál, tényleg jobb mint a kahoot?"
];

const one = [
    "",
    "3",
    "Super Mario Maker 2",
    "Egér",
    "Kahoot!",
    ":)",
    "IGEN",
    "345",
    "NEM",
    "NEM"
];

const two = [
    "",
    "22",
    "Among Us",
    "Dampfschifffahrt",
    "KérdésVihar!",
    ":(",
    "NEM",
    "21",
    "IGEN",
    "TÖK SZEMÉT!"
];

const three = [
    "",
    "4",
    "Roblox",
    "Schafseckel",
    "Menti",
    ":-)",
    "van kahoot előfizetésem",
    "47",
    "nagyon szemét volt",
    "IGEN"
];
const answer = [
    1,
    3,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    3 
];
function timerdisplay() {
    if (currentq==10) {
    } else {
   if (time!=0) {
    time--;
    document.getElementById("timer").innerHTML = time+'s';
}
if (time==0||incorrect) {
    exittimer--;
    if (incorrect) {
        document.getElementById("timer").innerHTML = "hibás válasz! "+exittimer+"... :/";
    } else {
    document.getElementById("timer").innerHTML = "lejárt az idő! "+exittimer+"... :/";
    }
if (exittimer==0) {
    document.getElementById("score").innerHTML=score;
    exittimer=6;
    incorrect=false;
    if (currentq<10) {   
        currentq+=1;
        time=20;
        document.getElementById("timer").innerHTML="20s";
        document.getElementById("question").innerHTML=question[currentq];
        document.getElementById("one").innerHTML=one[currentq];
        document.getElementById("two").innerHTML=two[currentq];
        document.getElementById("three").innerHTML=three[currentq];
        
}
if (currentq==10) {    
    document.getElementById("question").innerHTML = "sikerült mindent helyesen megválaszolnod!";
    document.getElementById("one").style.visibility="hidden";
    document.getElementById("two").style.visibility="hidden";
    document.getElementById("three").style.visibility="hidden";
    document.getElementById("timer").style.visibility="hidden";
}
}}}}
function check(value) {
    if (value==answer[currentq]) {
        if (!incorrect) {
            if (currentq<10) {   
            currentq++;
            score+=time;
            time=20;
            document.getElementById("score").innerHTML=score;
            document.getElementById("timer").innerHTML="20s";
            document.getElementById("question").innerHTML=question[currentq];
            document.getElementById("one").innerHTML=one[currentq];
            document.getElementById("two").innerHTML=two[currentq];
            document.getElementById("three").innerHTML=three[currentq];
            if (currentq==10) {    
       document.getElementById("question").innerHTML = "sikerült mindent helyesen megválaszolnod!";
       document.getElementById("one").style.visibility="hidden";
       document.getElementById("two").style.visibility="hidden";
       document.getElementById("three").style.visibility="hidden";
       document.getElementById("timer").style.visibility="hidden";
            }
        }}
    } else {
        incorrect=true;
    }
}
setInterval(timerdisplay, 1000);