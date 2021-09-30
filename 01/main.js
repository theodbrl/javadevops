// var pomme = prompt("Combien de pomme vous avez récoltées");
// var couleur = prompt ("les pommes sont elles rouges" );

// if(pomme > 35 & couleur == "oui") {
    // alert("bon boulot");
// } else {
    // alert("mauvais boulot");
// }

// var age = prompt("Quel âge avez-vous ?");

// if( age >= 1 && age <= 17  ){
//     alert("Vous n'êtes pas majeur");
// } else if (age >= 18 && age <= 49  ){
//     alert("Vous êtes majeur mais pas encore senior");
// }else if (age >= 50 && age <= 67  ){
//     alert("Vous êtes senior");
// }else if (age >= 68 && age <= 120 ){
//     alert("Vous êtes retraité incroyable");
// }
// else if (age > 120){
//     alert("Mais c'est ouf quand même");
// } else{
//     alert("Erreur");
// 
var max = Math.round(Math.random()*100)+100;
var min = Math.round(Math.random()*100); 

console.log(min)
console.log(max)

var nombre = prompt("Choissisez un nombre");
while(nombre){
if (nombre < max & nombre > min ){
    alert("Vous avez gagné");
    break;
}else{
    nombre = prompt("Choissisez un nombre")
}
}

