let time = 20;
let exittimer = 6;
let incorrect = false;
let currentq=0;
let score=0;

const question = [
    "",
    "2+2",
    "Háy percbe telik a napfénynek eljutni a földre?",
    "Melyik nincsen telefonon?",
    "Melyik szó magyar?",
    "Melyik a legjobb kvíz?",
    "melyik szomorú?",
    "Lehúzás a kahoot?",
    "mennyi 20+1?",
    "eddig jó volt?",
    "Hány lyuk van egy pólón?",
    "Hogy írjuk azt hogy alfaacademy?",
    "most hogy játszottál, tényleg jobb mint a kahoot?"
];

const one = [
    "",
    "3",
    "3",
    "Super Mario Maker 2",
    "Egér",
    "Kahoot!",
    ":)",
    "IGEN",
    "345",
    "NEM",
    "3",
    " Alphaacademy",
    "NEM"
];

const two = [
    "",
    "22",
    "nulla",
    "Among Us",
    "Dampfschifffahrt",
    "KérdésVihar!",
    ":(",
    "NEM",
    "21",
    "IGEN",
    "2",
    "50/50",
    "TÖK SZEMÉT!"
];

const three = [
    "",
    "4",
    "100",
    "Roblox",
    "Schafseckel",
    "Menti",
    ":-)",
    "van kahoot előfizetésem",
    "47",
    "nagyon szemét volt",
    "4",
    "Alpha academy",
    "IGEN"
];
const four = [
    "",
    "4",
    "8",
    "Robloksz",
    "SchafsecmousMenti",
    ":-)(",
    "van 1 éve kahoot előfizetésem",
    "1",
    "nagyon de naygon szemét volt",
    "100",
    "Alphakacademy",
    "Elég béna."
];
const answer = [
    1,
    3,
    4,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    3,
    4,
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
        document.getElementById("four").innerHTML=four[currentq];
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