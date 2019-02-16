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
*/

//Final version with adding by reaching 7th try input-form will close opportunity to insert values 
//and deactivating the button:
const zufaeligeZahl = Math.floor(Math.random() * 100);
var meinTip = 0;
var counter = 0;
var keineEingabe = false;
console.log(zufaeligeZahl);
//create things that I need:
const umbruch = document.createElement("br");
const dieForm = document.createElement("form");
const anleitung = document.createElement("p");
const counterZeigenRahmen = document.createElement("div");
const counterZeigenZaehler = document.createElement("div");
const counterZahl = document.createElement("p");
const inhaltZ0Anleitung = document.createTextNode("Deine Aufgabe ist es die zufällige Zahl zwischen 1 und 100 zu erraten, dafür hast du sieben Versuche.");
const inhaltZ1Anleitung = document.createTextNode("Gib dafür einfach eine Zahl in das Feld ein und drück auf den Button.");
const eingabeInput = document.createElement("input");
const eingabeButton = document.createElement("input");
var tooHiOtooLo = document.createElement("p");

//append everything on HTML-document:
document.body.append(dieForm);
document.body.append(anleitung);
document.body.append(tooHiOtooLo);
document.body.append(counterZeigenRahmen);
dieForm.appendChild(eingabeInput);
dieForm.appendChild(eingabeButton);
anleitung.appendChild(inhaltZ0Anleitung);
anleitung.appendChild(umbruch);
anleitung.appendChild(inhaltZ1Anleitung);
counterZeigenRahmen.appendChild(counterZeigenZaehler);
counterZeigenZaehler.appendChild(counterZahl);
//adjust things that I create.
//The paragraphs above input field:
anleitung.style.color = '#FF00FF';
anleitung.style.position = 'fixed';
anleitung.style.top = 0 + 'px';
anleitung.style.marginTop = 5 + 'px';
anleitung.style.marginBottom = 5 + 'px';

//The whole form(Input and Button):
dieForm.style.backgroundColor = 'red';
dieForm.style.position = 'fixed';
dieForm.style.top = 50 + 'px';

//The input field:
eingabeInput.autofocus = true;
eingabeInput.type = 'number';
eingabeInput.style.width = 200 + 'px';
eingabeInput.style.height = 25 + 'px';

//The Button:
eingabeButton.value = 'Tip abgeben';
eingabeButton.type = 'button';
eingabeButton.addEventListener("click", getTip);//This function will activate from top to bottom.
eingabeButton.addEventListener("click", bestimmteEingabe);
eingabeButton.style.width = 90 + 'px';
eingabeButton.style.height = 25 + 'px';
eingabeButton.style.color = 'black';

//Output if too High or too Low:
tooHiOtooLo.style.position = 'fixed';
tooHiOtooLo.style.fontWeight = 5 + 'px';//Change value to a bit more
tooHiOtooLo.style.fontSize = '155%';
tooHiOtooLo.style.top = 60 + 'px';

//First container to display counter in HTML:
counterZeigenRahmen.style.position = 'fixed';
counterZeigenRahmen.style.top = 5 + 'px';
counterZeigenRahmen.style.left = 680 + 'px';
counterZeigenRahmen.style.width = 80 + 'px';
counterZeigenRahmen.style.height = 80 + 'px';
counterZeigenRahmen.style.backgroundColor = 'cyan';
//Second container to display counter in HTML:
counterZeigenZaehler.style.position = 'inherit';//How called the attribute that takes the place?
//counterZeigenZaehler.style.top = 1 + 'emp';
//counterZeigenZaehler.style.left = 1 + 'emp';
counterZeigenZaehler.style.width = 65 + 'px';
counterZeigenZaehler.style.height = 65 + 'px';
counterZeigenZaehler.style.backgroundColor = 'lightgreen';
//Number in second container in HTML:
counterZahl.style.position = 'inherit';
counterZahl.style.fontSize = 150 + '%';
//counterZahl.style.left = 7 + 'px';
//counterZahl.style.top = 7 + 'px';

//Every Number that you already tipped:
// -> var getippteZahl = new Array[5];      Next version will show all inserts in a array and in a box in HTML-document!!!

//Gathering of functions:
function getTip(){
    meinTip = eingabeInput.value;
    if(eingabeInput.value == ''){
        counter = counter;
    } else if(eingabeInput.value % 1 != 0) {
        counter = counter;
    } else {
        counter++;
    }
    console.log("mein Tip " + meinTip);
    console.log("Zähler " + counter);

}

function bestimmteEingabe(){
    if(eingabeInput.value == '') {
        tooHiOtooLo.style.color = 'brown';
        tooHiOtooLo.innerHTML = "Du musst schon eine Zahl eingeben, um das Spiel zu spielen!";
        console.log("Eingabe wurde nicht gemacht!");
    } else if(eingabeInput.value % 1 != 0) {
        tooHiOtooLo.style.color = 'grey';
        tooHiOtooLo.innerHTML = "Kommazahlen sind nicht erlaubt";
        console.log("Eingabe wurde gemacht aber falsch!");
    } else {
        console.log("Eingabe wurde gemacht!");
        highOrLow5();
    }
}

function highOrLow5(){

    if((meinTip > zufaeligeZahl) && (counter <= 7)){
        eingabeInput.style.backgroundColor = '#FF4040';
        tooHiOtooLo.style.color = 'red';
        tooHiOtooLo.innerHTML = "Deine Zahl ist größer als die gesuchte Zahl!";
        counterZahl.innerHTML = counter;
    } else if ((meinTip < zufaeligeZahl) && (counter <= 7)) {
        eingabeInput.style.backgroundColor = '#7FFF00';
        tooHiOtooLo.style.color = 'green';
        tooHiOtooLo.innerHTML = "Deine Zahl ist kleiner als die gesuchte Zahl!";
        counterZahl.innerHTML = counter;
    } else if ((meinTip == zufaeligeZahl) && (counter < 8)) {
        eingabeInput.style.backgroundColor = 'gold';
        tooHiOtooLo.style.color = 'gold';
        tooHiOtooLo.innerHTML = "Du hast die richtige Zahl erraten!";
        eingabeInput.disabled = true;
        eingabeButton.disabled = true;
        counterZahl.innerHTML = counter;
    } else if ((meinTip == zufaeligeZahl) && (counter >= 7)){
        eingabeInput.style.backgroundColor = 'gold';
        tooHiOtooLo.style.color = 'gold';
        tooHiOtooLo.innerHTML = "Du hast die richtige Zahl erraten!";
        eingabeInput.disabled = true;
        eingabeButton.disabled = true;
        counterZahl.innerHTML = counter;
    } else if((meinTip != zufaeligeZahl) && (counter >= 6)) {
        tooHiOtooLo.style.color = '#FF00FF';
        tooHiOtooLo.innerHTML = "Du hast keine Versuche mehr! Aktualisiere die Seite um das Spiel neu zu starten!";
        eingabeInput.disabled = true;
        eingabeButton.disabled = true;
        counterZahl.innerHTML = counter;
    } else {
        tooHiOtooLo.innerHTML = "So nicht! Neustarten!";//
        eingabeInput.disabled = true;
        eingabeButton.disabled = true;
        counterZahl.innerHTML = counter;
    }

}

function keineKommazahlen(){

}