var objet = ["table", "chaise", "buffet", "Vitrine"]
var prix = [250, 150, 350, 500]

var reponse = prompt("Choississez un objet" +objet )

for (var i = 0; i <= objet.length; i++){

    if( reponse == objet[i]) {
        alert("le prix est de"+prix[i]+"$")
    }
    
}