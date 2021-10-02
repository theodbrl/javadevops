var nombre = prompt("Quel note sur 100 vous avez eu")

if(nombre >= 0 && nombre <= 59 ){
    alert("Plutôt faible")

}else if(nombre >= 60 && nombre <= 69 ){
    alert("tu dois faire des effort")
}else if(nombre >= 70 && nombre <= 79 ){
    alert("Pas malll")
}else if(nombre >= 80 && nombre <= 89 ){
    alert("greattt")
}else if(nombre >= 90 && nombre <= 100 ){
    alert("Incroyable")
}else{
    alert("ERREUR")
}