// var toto = "toto"
// let tata = "lol"
// const truc = "out"

// while (toto) {
//     let(truc) = "ok"
// }

// const names = ["jerome,", "lucas", "manu", "theo"];

// const constfullname = names.map(function(toto) {
//     return toto + "dupont";

// })

// const image = [
//     {height: "34px", with: "67px", color: "red" },
//     {height: "54px", with: "45px", color: "blue" },
//     {height: "74px", with: "28px", color: "yellow" },
//     {height: "15px", with: "65px", color: "green" },
//     {height: "27px", with: "80px", color: "black" }
// ]


// const parametre = image.map(function(toto) {
    

//     return toto.height
// })

// console.log(parametre);


// function snapword(string){
//     const stringsplitted = string.split(" ");
//     const arraysplitted = stringsplitted.map(function(item, chiffre){
//         if(chiffre%2) {
//             return item.toupprtcase()
//         }else{
//             return item.tolowerCase()
//         }
    
// })

// const newstring = arraysplitted.join(" ") 
// return newstring;


// id


// let = user = user.find(function(toto) {
//     return toto.name == "sacha"

// })
// console.log(user);

// let userindex = user.findindex(function(toto){
//     return toto.name == "sacha"
// })
// console.log(index)

const ages = [35, 21 ,19, 26, 11];

let adultpresent = ages.some(function(toto){
    return toto >= 18
})

console.log(adultpresent);