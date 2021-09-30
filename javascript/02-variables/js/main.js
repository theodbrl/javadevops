
// alert("coucou les gens ")

// alert(            'coucou encore'            )

var maVariable; // camelCase , snake_case , ma_variable
//  var ma-variable => pas de tiret lors de la déclaration d'une variable !!!!!!
//  var 123soleil => pas de chiffre en début de variable  !!!!

//var x;

// alert(x) // unddefined car la variable ne contient rien, elle est vide 
// alert(y) // ça nous renvoi une erreur car la variable y n'existe pas 

// x = 12;
// x = "Vesass";
// alert(x);

//X = 12; // déclaré tout seul comme un grand la variable en global
//alert(X);

// var annee = 2021; // number
// var mois = "Septembre"; // string = chaine de caractères
// var isWinter = false; // boolean

// typeof(isWinter)
//alert(typeof(isWinter)); // boolean

//alert(mois+" "+annee) // concaténation 

// var espace = " ";
// alert(mois + espace + annee)

// -------------------------------------

 var chiffre1 = 200;
 var chiffre2 = 14;

// alert(chiffre1 + chiffre2) // 210 addition

// var chiffre3 = "200";
// var chiffre4 = "10";
// alert(chiffre3+chiffre4); // 20010 concaténation 

// alert(chiffre1-chiffre2); // 190
// alert(chiffre1*chiffre2); // 2000
// alert(chiffre1/chiffre2); // 20
//alert(chiffre1%chiffre2);  // modulo = reste de la division 

//var prenom = prompt("Entrez un nom")
//alert("Bonjour" + " " + prenom)


// exo : lancez 2 pompt qui demandent un nombre chacun
// afficher la somme des nombres

// var chiffre1=Number(prompt("entez un nombre"));

// var chiffre2=parseInt(prompt("entrez un nombre"));
// //var reponse =  parseInt(chiffre1) + parseInt(chiffre2)

// alert(chiffre1+chiffre2);

var texte = "10.5 centimètre";
//alert(parseInt(texte)); // 10
//alert(parseFloat(texte)); // 10.5
alert(Number(texte)); // NaN = Not a Number