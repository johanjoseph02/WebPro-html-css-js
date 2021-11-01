console.log("Hello there, fellow inspector");
console.log(".");
console.log(".");
console.log("Welcome to Adder.io")
console.log("Designed and Developed by Johan Mathew Joseph")
console.log(".");
function add() 
{
    event.preventDefault();
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    document.getElementById("ansbox").value = a + b;
    document.getElementById("anslabel").style.display = "block";
    document.getElementById("ansbox").style.display = "block";
}