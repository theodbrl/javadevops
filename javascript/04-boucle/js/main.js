// while 

// var count = 0;
// while(count <=  100) {
//     console.log(count);
//     count++ 
// }

// var prenom = prompt("Entrez un prénom");
// while(prenom){
//     if (prenom == "toto") {
//         console.log("bha alors toto ça faisait longtemps ")
//         prenom = prompt("entrez un prenom");
//     } else {
//         console.log("Bonjour "+prenom);
//         prenom = prompt("entrez un prenom");
//     }
// }
// var min = 20
// console.log(min)

// exo min max 
// prompt demander de deviner un nombre 
// tant que le nombre n'est pas dans la bonne fourchette relancer le prompt



var min = Math.round(Math.random()*100);   50
 var max = Math.round(Math.random()*100) + min;   140
console.log(min + " " + max)

choix = Number(prompt("choisis un nombre"))

while(choix < min || choix > max ) {
    console.log(choix + " "+ "n'est pas la bonne réponse, recommence");
    choix = Number(prompt("choisis un nombre"))
}

console.log("VOUS AVEZ GAGNE")


var guess = true;

while(guess) {
    choix = Number(prompt("choisis un nombre"));
    if (choix > min && choix < max){
        console.log("vous avez gagné")
        guess = false;
    }
}