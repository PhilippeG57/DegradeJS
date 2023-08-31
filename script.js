/* Je crée mes variables */
const body = document.body;

let input1 = document.getElementById("color1");
let input2 = document.getElementById("color2");
let input3 = document.getElementById("orientation");

let labelInput1 = document.getElementById("labelInput1");

/*Selectionner tous les elements ayant la class input-group*/
let inputGroupAll = document.querySelectorAll('.input-group');
/*Selectionner le premier element ayant la class input-group*/
let inputgroup1 = inputGroupAll[0];
/*Selectionner le deuxieme element ayant la class input-group*/
let inputgroup2 = inputGroupAll[1];

let labelInput2 = document.getElementById("labelInput2");
let valeurOrientation = document.querySelector('.orientation-value');

/*Initialiser mes 3 valeurs d'input et le fond de mon body*/
input1.value = "#FF5F6D";
input2.value = "#FFC371";
input3.value = "90";
body.style.background = "linear-gradient("+input3.value+"deg, "+input1.value+", "+input2.value+")";

input1.oninput = function(){
    /*console.log(input1.value); */
    /*on voit que input1.value renvoie bien la couleur selectionnée en hexadecimal*/
    inputgroup1.style.backgroundColor = input1.value;
    /*Je change le fond de la div de class input-group comprennant l'input 1*/
    labelInput1.innerHTML = input1.value;
    /*Je change le fond du body avec les degrés (input3.value), la premiere couleur (input1.value) et la deuxieme couleur (input2.value)*/
    body.style.background = "linear-gradient("+input3.value+"deg, "+input1.value+", "+input2.value+")";
};

input2.oninput = function(){
    inputgroup2.style.backgroundColor = input2.value;
    labelInput2.innerHTML = input2.value;
    body.style.background = "linear-gradient("+input3.value+"deg, "+input1.value+", "+input2.value+")";
};

input3.oninput = function(){
    /* Changer la valeur en degrés dans l'orientation */
    valeurOrientation.innerHTML = input3.value + "°"
    body.style.background = "linear-gradient("+input3.value+"deg, "+input1.value+", "+input2.value+")";
};


let randomBtn = document.querySelector('.random-btn');
randomBtn.onclick = function(){
    
    let redinput1 = Math.floor(Math.random() * 255);
    let greeninput1 = Math.floor(Math.random() * 255);
    let blueinput1 = Math.floor(Math.random() * 255);
    let redinput2 = Math.floor(Math.random() * 255);
    let greeninput2 = Math.floor(Math.random() * 255);
    let blueinput2 = Math.floor(Math.random() * 255);

    const input1randomRGB = `rgb(${redinput1},${greeninput1},${blueinput1})`;
    const input2randomRGB = `rgb(${redinput2},${greeninput2},${blueinput2})`;
    //Renvoie par exemple rgb(145, 240, 10)
   
    labelInput1.innerHTML = input1randomRGB;
    labelInput2.innerHTML = input2randomRGB;

    body.style.background = "linear-gradient("+input3.value+"deg, "+input1randomRGB+", "+input2randomRGB;

}



























/*document.body.style.background = "linear-gradient(90deg, #e66465, #9198e5);"*/