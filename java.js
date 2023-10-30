var menu = document.getElementById("menu")
var buger = document.getElementById("buger");
var tax = document.getElementById("tax")

buger.style.right = "-250px";
menu.onclick = function(){
    if(buger.style.right == "-250px"){
        buger.style.right = "0";
    }
    else{
        buger.style.right = "-250px";

    }
}