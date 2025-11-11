function color(){
    document.body.style.backgroundColor = "pink";
    document.getElementById("h11").style.color="rgba(255, 0, 119, 1)";
}
document.getElementById("but").addEventListener("click",color);

function color2(){
    document.body.style.backgroundColor = "navy";
    document.getElementById("h11").style.color="white";
}
document.getElementById("but2").addEventListener("click",color2);

function color3(){
    document.body.style.backgroundColor = "rgba(221, 192, 223, 1)";
    document.getElementById("h11").style.color="rgba(113, 27, 120, 1)";
}
document.getElementById("but3").addEventListener("click",color3);

function color4(){
    document.body.style.backgroundColor = "aliceblue";
    document.getElementById("h11").style.color="rgb(4, 120, 4)";
}
document.getElementById("but4").addEventListener("click",color4);

