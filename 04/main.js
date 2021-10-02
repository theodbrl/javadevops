var prenom = "sacha"
var nom = "flocon"
// var age = "45"

var prenom ="Marc", nom ="flocon", age= 24;

var personne1 = ["sacha", "Flocon",45];
var personne2 = ["Pierre-Henry", "L'archer", 35]

function getAge(pers) {
    console.log(pers[2]);
}

getAge(personne2)

var personne3 = {
    firstname: "Manue",
    lastname: "Dupont",
    age: 24,
    child: 3
};

function getName(pers){
    console.log(pers.lastName)
}

getName(personne3)

