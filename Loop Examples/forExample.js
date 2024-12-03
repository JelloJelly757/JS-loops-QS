let outputDiv = document.getElementById("output"); 
outputDiv.innerHTML += "<h2>Using a 'for' loop to create a star pattern</h2>"; 

let pyramid = ""; 
for(let i = 1; i < 1000; i++){
    pyramid += "*".repeat(i) + "<br>"; 
}
outputDiv.innerHTML += pyramid; 