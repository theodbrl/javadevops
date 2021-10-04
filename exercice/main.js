document.getElementById("btn").onclick = function() {
    document.getElementById("box").style.display = "none"
}

var isActived = true

document.getElementById("btn").addEventListener("click", mafact)

function mafact() {
    if(isActived) {
        isActived = false
        document.getElementById("box")
    } else {
        isActived = true
        document.getElementById("box").style.display = "block"
    }

}