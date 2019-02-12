//First version of HiLo(JavaScript only):

/*
const zufaeligeZahl = Math.floor(Math.random() * 100);
console.log(zufaeligeZahl);
var eingabe = prompt("Gib eine Zahl ein:");


while(eingabe != zufaeligeZahl){
    if(eingabe > zufaeligeZahl){
        alert("Deine Zahl ist größer als die gesuchte Zahl");
        eingabe = prompt("Gib bitte einen neuen Tip ab");
    } else {
        alert("Diene Zahl ist kleiner als die gesuchte Zahl");
        eingabe = prompt("Gib bitte einen neuen Tip ab");
    }
  }
  alert("Du hast die richtige Zahl Gefunden!");
*/

//Second version of HiLo with adding a counter for every tip(JavaScript only);

/*
const zufaeligeZahl = Math.floor(Math.random() * 100);
var eingabe = prompt("Gib eine Zahl ein:");
var counter = 0;
console.log(zufaeligeZahl);

while((eingabe != zufaeligeZahl) && (counter <= 7)){

    if(eingabe > zufaeligeZahl){
        alert("Deine Zahl ist größer als die gesuchte Zahl");
        eingabe = prompt("Gib bitte einen neuen Tip ab");
        counter++;
    } else {
        alert("Diene Zahl ist kleiner als die gesuchte Zahl");
        eingabe = prompt("Gib bitte einen neuen Tip ab");
        counter++;
    }
  }
  if(eingabe == zufaeligeZahl){
  alert("Du hast die richtige Zahl Gefunden!");
  } else {
    alert("Du hast mehr als sieben Mal getippt!");
  }
  */

//Third version of HiLo with using HTML insteat of JavaScript:
//create global variables that I need:
/*
const zufaeligeZahl = Math.floor(Math.random() * 100);
var meinTip = 0;
var counter = 0;
var zuViel = false;
var richtigeZahl = false;
console.log(zufaeligeZahl);

//create things that I need:
const umbruch = document.createElement("br");
const dieForm = document.createElement("form");
const anleitung = document.createElement("p");
const inhaltZ0Anleitung = document.createTextNode("Deine Aufgabe ist es die zufällige Zahl zu erraten.");
const inhaltZ1Anleitung = document.createTextNode("Gib dafür einfach eine Zahl in das Feld ein und drück auf den Button.");
const eingabeInput = document.createElement("input");
const eingabeButton = document.createElement("input");
var tooHiOtooLo = document.createElement("p");

//append everything on HTML-document:
document.body.append(dieForm);
document.body.append(anleitung);
document.body.append(tooHiOtooLo);
dieForm.appendChild(eingabeInput);
dieForm.appendChild(eingabeButton);
anleitung.appendChild(inhaltZ0Anleitung);
anleitung.appendChild(umbruch);
anleitung.appendChild(inhaltZ1Anleitung);

//adjust things that I create.
//The paragraphs above input field:
anleitung.style.color = '#FF00FF';
anleitung.style.position = 'fixed';
anleitung.style.top = 5 + 'px';

//The whole form(Input and Button):
dieForm.style.backgroundColor = 'red';
dieForm.style.position = 'fixed';
dieForm.style.top = 65 + 'px';

//The input field:
eingabeInput.id = 'derTip';
eingabeInput.type = 'number';
eingabeInput.style.width = 200 + 'px';
eingabeInput.style.height = 25 + 'px';

//The Button:
eingabeButton.value = 'Tip abgeben';
eingabeButton.type = 'button';
eingabeButton.addEventListener("click", getTip);
eingabeButton.addEventListener("click", console.log(counter));
eingabeButton.addEventListener("click", highOrLow3P75);
eingabeButton.style.width = 90 + 'px';
eingabeButton.style.height = 25 + 'px';
eingabeButton.style.color = 'red';

//Output if too High or too Low:
tooHiOtooLo.style.position = 'fixed';
tooHiOtooLo.style.fontSize = '155%';
tooHiOtooLo.style.top = 75 + 'px';

//Gathering of functions:
function getTip(){
    meinTip = eingabeInput.value;
    console.log(meinTip);
}

function highOrLow(){

    if(meinTip > zufaeligeZahl){
        tooHiOtooLo.innerHTML = "Deine Zahl ist größer als die gesuchte Zahl!";
    } else if (meinTip < zufaeligeZahl) {
        tooHiOtooLo.innerHTML = "Deine Zahl ist kleiner als die gesuchte Zahl!";
    } else if (meinTip == zufaeligeZahl) {
        tooHiOtooLo.innerHTML = "Du hast die richtige Zahl erraten!";
    } else {
        tooHiOtooLo.innerHTML = "Etwas stimmt nicht";//Test Zweck!
    }

}

//Version 3.5 with adding that if number is too high red output / too low green output / else golden ouput.
function highOrLow3P5(){

    if(meinTip > zufaeligeZahl){
        tooHiOtooLo.style.color = 'red';
        tooHiOtooLo.innerHTML = "Deine Zahl ist größer als die gesuchte Zahl!";
    } else if (meinTip < zufaeligeZahl) {
        tooHiOtooLo.style.color = 'green';
        tooHiOtooLo.innerHTML = "Deine Zahl ist kleiner als die gesuchte Zahl!";
    } else if (meinTip == zufaeligeZahl) {
        tooHiOtooLo.style.color = 'gold';
        tooHiOtooLo.innerHTML = "Du hast die richtige Zahl erraten!";
    } else {
        tooHiOtooLo.innerHTML = "Etwas stimmt nicht";//Test Zweck!
    }

}


//Version 3.75 with adding that input form will change color equal to paragraph below:
function highOrLow3P75(){

    if(meinTip > zufaeligeZahl){
        eingabeInput.style.backgroundColor = '#FF4040';
        tooHiOtooLo.style.color = 'red';
        tooHiOtooLo.innerHTML = "Deine Zahl ist größer als die gesuchte Zahl!";
    } else if (meinTip < zufaeligeZahl) {
        eingabeInput.style.backgroundColor = '#7FFF00';
        tooHiOtooLo.style.color = 'green';
        tooHiOtooLo.innerHTML = "Deine Zahl ist kleiner als die gesuchte Zahl!";
    } else if (meinTip == zufaeligeZahl) {
        eingabeInput.style.backgroundColor = 'gold';
        tooHiOtooLo.style.color = 'gold';
        tooHiOtooLo.innerHTML = "Du hast die richtige Zahl erraten!";
    } else {
        tooHiOtooLo.innerHTML = "Etwas stimmt nicht";//Test Zweck!
    }

}
*/

//fourth version with adding counter. Game will stop by reaching counter of 7 or find right value:
const zufaeligeZahl = Math.floor(Math.random() * 100);
var meinTip = 0;
var counter = 0;
var zuViel = false;
var richtigeZahl = false;
console.log(zufaeligeZahl);
//create things that I need:
const umbruch = document.createElement("br");
const dieForm = document.createElement("form");
const anleitung = document.createElement("p");
const inhaltZ0Anleitung = document.createTextNode("Deine Aufgabe ist es die zufällige Zahl zu erraten, dafür hast du sieben Versuche.");
const inhaltZ1Anleitung = document.createTextNode("Gib dafür einfach eine Zahl in das Feld ein und drück auf den Button.");
const eingabeInput = document.createElement("input");
const eingabeButton = document.createElement("input");
var tooHiOtooLo = document.createElement("p");

//append everything on HTML-document:
document.body.append(dieForm);
document.body.append(anleitung);
document.body.append(tooHiOtooLo);
dieForm.appendChild(eingabeInput);
dieForm.appendChild(eingabeButton);
anleitung.appendChild(inhaltZ0Anleitung);
anleitung.appendChild(umbruch);
anleitung.appendChild(inhaltZ1Anleitung);

//adjust things that I create.
//The paragraphs above input field:
anleitung.style.color = '#FF00FF';
anleitung.style.position = 'fixed';
anleitung.style.top = 5 + 'px';

//The whole form(Input and Button):
dieForm.style.backgroundColor = 'red';
dieForm.style.position = 'fixed';
dieForm.style.top = 65 + 'px';

//The input field:
eingabeInput.id = 'derTip';
eingabeInput.type = 'number';
eingabeInput.style.width = 200 + 'px';
eingabeInput.style.height = 25 + 'px';
eingabeInput.style.backgroundColor = 'orange';

//The Button:
eingabeButton.value = 'Tip abgeben';
eingabeButton.type = 'button';
eingabeButton.addEventListener("click", getTip);
eingabeButton.addEventListener("click", console.log(counter));
eingabeButton.addEventListener("click", highOrLow4);
eingabeButton.style.width = 90 + 'px';
eingabeButton.style.height = 25 + 'px';
eingabeButton.style.color = 'red';

//Output if too High or too Low:
tooHiOtooLo.style.position = 'fixed';
tooHiOtooLo.style.fontSize = '155%';
tooHiOtooLo.style.top = 75 + 'px';

//Gathering of functions:
function getTip(){
    meinTip = eingabeInput.value;
    console.log(meinTip);
}

function highOrLow(){

    if(meinTip > zufaeligeZahl){
        tooHiOtooLo.innerHTML = "Deine Zahl ist größer als die gesuchte Zahl!";
    } else if (meinTip < zufaeligeZahl) {
        tooHiOtooLo.innerHTML = "Deine Zahl ist kleiner als die gesuchte Zahl!";
    } else if (meinTip == zufaeligeZahl) {
        tooHiOtooLo.innerHTML = "Du hast die richtige Zahl erraten!";
    } else {
        tooHiOtooLo.innerHTML = "Etwas stimmt nicht";//Test Zweck!
    }

}

function highOrLow4(){//Trying by checking two different kind of values

    if((meinTip > zufaeligeZahl) && (counter <= 7)){
        eingabeInput.style.backgroundColor = '#FF4040';
        tooHiOtooLo.style.color = 'red';
        tooHiOtooLo.innerHTML = "Deine Zahl ist größer als die gesuchte Zahl!";
        counter++;
    } else if ((meinTip < zufaeligeZahl) && (counter <= 7)) {
        eingabeInput.style.backgroundColor = '#7FFF00';
        tooHiOtooLo.style.color = 'green';
        tooHiOtooLo.innerHTML = "Deine Zahl ist kleiner als die gesuchte Zahl!";
        counter++;
    } else if ((meinTip == zufaeligeZahl) && (counter <= 7)) {
        eingabeInput.style.backgroundColor = 'gold';
        tooHiOtooLo.style.color = 'gold';
        tooHiOtooLo.innerHTML = "Du hast die richtige Zahl erraten!";
    } else if((meinTip != zufaeligeZahl) && (counter >= 7)) {
        tooHiOtooLo.innerHTML = "Du hast keine Versuche mehr!"
        
    }

}

