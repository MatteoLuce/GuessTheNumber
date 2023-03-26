

let myNumber = Math.floor((Math.random() * 100) + 1)
console.log("Random number to guess: ",myNumber)

document.getElementById("submit").onclick = function verifyNumber (){
    
    const userGuess = document.getElementById("guess").value;

    let result;
    
    if (userGuess == myNumber) {
        result = `${userGuess}?  You get it! Good job mate`;
        document.getElementById("result").style.color = "green";
        countDisplay.innerHTML = `You guessed it in ${count} attempts`;
        localStorage.setItem("lastscore", count);
    } else if (userGuess < myNumber) {
        result = `${userGuess}?  The number is too small!` 
        document.getElementById("result").style.color = "orange"
    } else {
        result = `${userGuess}?  The number is too high!`
        document.getElementById("result").style.color = "red"
    } 

    document.getElementById("result").innerText = result;

    
}


var input = document.getElementById("guess");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});

var count = 1;
      var button = document.getElementById("submit");
      var countDisplay = document.getElementById("count");
      button.addEventListener("click", function() {
         count++;
      });

document.getElementById("reload").onclick = refreshPage;



function refreshPage (){
    
    document.getElementById("newnumber").innerText = "New number generated..."
    setTimeout(()=> { window.location.reload(); },2000);
    
}

document.getElementById("demo").innerHTML = `Your last score was: ${localStorage.getItem("lastscore")} attemps`;

let valor = localStorage.getItem("lastscore");

if (valor != 'null') {
    document.getElementById('demo').style.display = 'block';
} else {
    document.getElementById('demo').style.display = 'none';
}

