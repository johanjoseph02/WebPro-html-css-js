function add() 
{
    event.preventDefault();
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    document.getElementById("ansbox").value = a + b;
    document.getElementById("anslabel").style.display = "block";
    document.getElementById("ansbox").style.display = "block";
}