function plus(){
    var Myelement = document.getElementById("1");
    Myelement.value++;
    var value=Myelement.value
    totalprice()
    return value;
}
function minus(){
    var Myelement = document.getElementById("1");
    lessthanzero=false
    if (Myelement.value==0){
        lessthanzero=true
    }
    if (lessthanzero == false){
        Myelement.value--;
        
    }
    var value=Myelement.value
    totalprice()
    return value;
}
function plus2(){
    var Myelement = document.getElementById("2");
    Myelement.value++;
    var value3=Myelement.value
    totalprice()
    return value3;
}
function minus2(){
    var Myelement = document.getElementById("2");
    lessthanzero=false
    if (Myelement.value==0){
        lessthanzero=true
    }
    if (lessthanzero == false){
        Myelement.value--;
    }
    var value2=Myelement.value
    totalprice()
    return value2;
}
function plus3(){
    var Myelement = document.getElementById("3");
    Myelement.value++;
    var value3=Myelement.value
    totalprice()
    return value3;
}
function minus3(){
    var Myelement = document.getElementById("3");
    lessthanzero=false
    if (Myelement.value==0){
        lessthanzero=true
    }
    if (lessthanzero == false){
        Myelement.value--;
    }
    var value3=Myelement.value
    totalprice()
    return value3;
}
function totalprice(){
    let sum=0
    let prices = document.querySelectorAll(".price")
    let Qts = document.querySelectorAll(".QNT")
    for (let i=0;i<Qts.length;i++){
        sum = sum + prices[i].innerHTML*Qts[i].value
    }
    document.querySelector("#finalPrice").value= sum 
}
// var btnpls= document.querySelectorAll(".plus-btn")
// for(let i=0;i<Qts.length;i++){
//     btnpls[i].addEventListener("click",function(){
//         btnpls[i].previousElementSibling.value++
//     })
// }
var heart = document.querySelectorAll(".fa")
for(let i=0;i<heart.length;i++){
heart[i].addEventListener("click",function(){
if(heart[i].style.color=="rgb(158, 158, 158)"){
    heart[i].style.color="red"
}else{
    heart[i].style.color="rgb(158, 158, 158)"
}})}
var remove = document.querySelectorAll(".delete")
for(let i=0;i<remove.length;i++){
    remove[i].addEventListener("click",function(){
        remove[i].parentNode.remove()
        totalprice()
    })
}