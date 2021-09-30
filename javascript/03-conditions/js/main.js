// if(condition) { // si la condition est vrai
//         // alors fait cecis
// } else { sinon
//          fait ceci
//}

// if (1>2) {
//     alert("youpiie");
// } else {
//     alert("mais n'importe quoi !")
// }

//var age = parseInt(prompt("Quel est ton âge jeune écureuil ? "))
/*
if (age >= 18 ) {
    alert("tu es majeur")
} else {
    alert("tu es mineur")
}
*/
// if (age == 18) {
//     alert("Bienvenue chez les grands"); // compare valeur de la variable 
// } 

// if (age === 18) {
//     alert("Bienvenue chez les grand"); // on compare la valeur ET le type 
// }


// if (age > 18) {
//     alert("tu es majeur");
// } else if (age == 18){
//     alert("Bienvenue chez les grands")
// }else {
//     alert("Tu es mineur")
// }

//Exo: prompt : "combien de pommes avez-vous récoltées ?"
// si plus de 35 pommes : bon boulot, si moins : retourne travailler chacal.

// si les pommes sont rouges alors "bien joué c'est ce que je voulais "
// si les pommes sont vertes alors " C'est pas mal mais c'est pas la couleur que je voulais"

// correction 

// var pomme = Numbet(prompt("combien de pomme as-tu cueillies ? "));
// var couleur = prompt("De quelle couleur sont tes pommes ?");

// if (pomme >= 35) {
//     alert("bien joué");
// } else {
//     ("retourne travailler");
// }

// if (pomme >= 35) {
//     if (couleur == "rouge") {
//         alert("bravo")
//     } else {
//         alert("c'est pas mal mais ce n'est pas la couleur demandée");
//     }
// } else {
//     alert("retourne travailler")
// }


// if (pomme >= 35 && couleur == "rouge") {
//     alert("bravo")
// } else {
//     alert("pas bien")
// }


// var nombre = Math.round(Math.random()* 100); // génère un nombre entre 0 et 100
// alert(nombre)

// Math.round() --> arrondi, ex 10.4 = 10, 10.8 = 11
// Math.floor() --> arrondi vers le bas ex 10.9 = 10
// Math.ceil() --> arrondi vers le haut ex 10.1 = 11

// Exo : meuble avec 4 tiroirs 
// demander de choisir un tirroir via un prompt 
// si c'est 1 : contient des vêtement 
// si c'est 2 : tirroir fermé a clé
// si c'est 3 : tirroir vide
// si c'est 4 : contient des chaussettes 


// var tirroir = parseInt(prompt("Choisissez un tirroir de 1 à 4"));

// if (tirroir == 1 ){
//     alert("ce tirroir contient des vêtement");
// } else if (tirroir == 2) {
//     alert("ce tirroir est  fermé a clé");
// } else if (tirroir == 3) {
//     alert("ce tirroir est vide");
// } else if (tirroir == 4) {
//     alert("ce tirroir contient des chaussettes ");
// } else {
//     alert("ce n'st pas un tirroir ");
// }


// var tirroir = parseInt(prompt("Choisissez un tirroir de 1 à 4"));

// switch(tirroir){ // comparer tous les cas suivant 
//     case 1:
//         alert("le tirroir contient des vêtements");
//         break;
//     case 2:
//         alert("le tirroir est fermé à clef");
//         break;
//     case 3:
//         alert("le tirroir est vide");
//         break;
//     case 4:
//         alert("le tirroir contient des chaussettes");

//         break;
//     default:

//     alert("de?");
// }

// exo 

// prompt qui demande l'age de la personne 

/* 1 à 17 : vous n'êtes pas majeur
    18 à 49 : vous êtes majeur mais pas encore senior
    50 à 67 :  vous êtes senior 
    68 à 120 : vous êtes retraité incroyable
    plus de 120 : mais c'est ouf ça quand meme 
    sinon : il y a une erreur   */


//var age = parseInt(prompt("Entrez votre age"));



// if (age >= 1 && age <=17) {

// alert("vous n'etes pas majeur");

// }

// else if (age >= 18 && age <=49) {

// alert("vous etes majeur mais pas encore senior");

// }

// else if (age >= 50 && age <=67) {

// alert("vous etes senior");

// }

// else if (age >= 68 && age <=120) {

// alert("vous etes retraite incroyables !!!!");

// }

// else if (age > 120) {

// alert("mais c'est ouf ca quand meme");

// }

// else {

// alert("Il y a une erreur");

// }

// switch(true) { // faire la comparaison 
//     case(age < 17):
//         alert("vous n'êtes pas majeur");
//         break;
//     case(age < 49):
//         alert("vous êtes majeur mais pas encore senior");
//         break;
//     case(age < 68):
//         alert("vous êtes senior");
//         break;
//     case(age < 120):
//         alert("vous êtes retraité profitez-en");
//         break;
//     default:
//         alert("il y a une erreur");
// }


//EXO  definissez un min et un max aléatoirement 
// prompt qui va demander de deviner le nomre 
// si le nomre est compris entre le min et le max vous avez gagné sinon vous avez perdu


var min = Math.round(Math.random()*100); 
// var max = Math.round(Math.random()*100)+100; 

 var max = Math.round(Math.round()*100)+min 

 //var max = (min+100)

console.log(min + " " + max)

var choix = parseInt(prompt("Choisissez un nombre entre 1 et 200"));

if (choix >= min && choix <= max) {
    alert("vous avez gagné");
} else {
    alert("vous avez perdu")
}