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

//create things that I need:
const umbruch = document.createElement("br");
const dieForm = document.createElement("form");
const anleitung = document.createElement("p");
const inhaltZ0Anleitung = document.createTextNode("Deine Aufgabe ist es die zufällige Zahl zu erraten.");
const inhaltZ1Anleitung = document.createTextNode("Gib dafür einfach eine Zahl in das Feld ein und drück auf den Button.");
const eingabeInput = document.createElement("input");
const eingabeButton = document.createElement("button");
const tooHiOtooLo = document.createElement("p");
var inhaltTHOTL = document.createTextNode("Die entsprechende Ausgabe");
//append everything on HTML-document:
document.body.append(dieForm);
dieForm.appendChild(anleitung);
dieForm.appendChild(eingabeInput);
dieForm.appendChild(eingabeButton);
dieForm.appendChild(tooHiOtooLo);
anleitung.appendChild(inhaltZ0Anleitung);
anleitung.appendChild(umbruch);
anleitung.appendChild(inhaltZ1Anleitung);
tooHiOtooLo.appendChild(inhaltTHOTL);
//adjust things that I create.
//The paragraphs above input field:
anleitung.style.color = '#FF00FF';
//The whole form:
dieForm.style.color = 'black';
//The input field:
eingabeInput.type = 'number';
eingabeInput.value = 'number';
eingabeInput.style.position = 'fixed';
eingabeInput.style.left = 20 + 'px';
eingabeInput.style.width = 200 + 'px';
eingabeInput.style.height = 25 + 'px';
//The Button:
eingabeButton.innerHTML = 'Tip abgeben';
eingabeButton.type = 'submit';
eingabeButton.value = 'number';
eingabeButton.style.position = 'fixed';
eingabeButton.style.width = 90 + 'px';
eingabeButton.style.height = 25 + 'px';
eingabeButton.style.left = 225 + 'px';
//Output if too High or too Low:
// -> Try to implement: if input number is too high -> output is in red. Else output is green.
tooHiOtooLo.style.position = 'fixed';
tooHiOtooLo.style.top = 100 + 'px';
tooHiOtooLo.style.left = 50 + 'px';
//Gathering of functions:

//Testzweck:
function gedrueckt(){
    if(eingabeButton.onclick == true){
    console.log("Dude");
    }
}
gedrueckt();
