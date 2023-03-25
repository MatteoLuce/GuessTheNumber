

let myNumber = Math.floor((Math.random() * 100) + 1)
console.log("Random number to guess: ",myNumber)

document.getElementById("submit").onclick = function verifyNumber (){
    
    const userGuess = document.getElementById("guess").value;

    let result;
    
    if (userGuess == myNumber) {
        result = "You get it! Good job mate";
        document.getElementById("result").style.color = "green"
    } else if (userGuess < myNumber) {
        result = "The number is too small!"
        document.getElementById("result").style.color = "orange"
    } else if (userGuess > myNumber) {
        result = "The number is too high!"
        document.getElementById("result").style.color = "red"
    } 

    document.getElementById("result").innerText = result
}


document.getElementById("reload").onclick = refreshPage;

function refreshPage (){
    
    document.getElementById("newnumber").innerText = "New number generated..."
    setTimeout(()=> { window.location.reload(); },2000);
    
}


