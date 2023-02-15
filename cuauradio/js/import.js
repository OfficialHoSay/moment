(async () => {
    const res = await fetch("../img/ticker.txt")
const textContent = await request.text()

var lines = textContent.split("\n")

for (var line of lines) {
    var span = document.createElement("span");
 span.className = "ticker__item";
 span.innerHTML = line;
 
 document.getElementById("ticker").appendChild(span);
 }
})()