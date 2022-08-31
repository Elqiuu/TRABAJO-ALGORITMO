class eje{
    bisi(){
        let año=document.getElementById("año").value
        año=parseFloat(año)
        año=año%100
        if(año%4==0){
            res.textContent="Es un año bisiesto"
        }else if(año%4!=0){
            res.textContent="No es un año bisiesto"
        }
    }
}
let ejer=new eje()