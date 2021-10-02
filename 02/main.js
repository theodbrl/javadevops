var prenoms = new Array("Vesass", "Tartanpion", "Macron")
console.log(prenoms)

console.log(prenoms[prenoms.length-1]) // [prenoms.length-1] permet d'accéder au dernier élément de l'array

var villes = [];
var pays = ["Belgique", "France", "Russie"];

console.log(pays.length);

for (var i = 0; i < pays.length; i++){
    console.log(pays[i]);
}

prenoms.push("Steeve"); // ajouter à la fin de la liste existante
console.log(prenoms);

prenoms.unshift("Lucas"); // ajoute au début de la liste
console.log(prenoms);

prenoms.pop();
prenoms.shift();
console.log

var nom = "Lucas le fou"
var monArray = nom.split(" ");
console.log(monArray)
