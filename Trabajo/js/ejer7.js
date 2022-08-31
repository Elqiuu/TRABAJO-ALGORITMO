class ejer{
    cs(){
        let numero1=document.getElementById("numero1").value;
        numero1=parseFloat(numero1)
        let numero2=document.getElementById("numero2").value;
        numero2=parseFloat(numero2)
        let con=0
        let con2=0
        if(numero1>numero2){
            for(let i=numero2; i<=numero1; i++){
                con=con+1
                con2=i+con2
                
            }
        }else if(numero2>numero1){
            for(let i=numero1; i<=numero2; i++){
                con=con+1
                con2=i+con2}
        }
        resp.textContent=`el resultado es: ${con2.toString()}\n`
        if(numero1>numero2){
            resp.textContent=`Se han sumado un total de numeros ${con.toString()}, comeinzan con el ${numero2.toString()} hasta el ${numero1.toString()}\n dando un total de ${con2.toString()} numeros`
        }else if(numero2>numero1){
            resp.textContent=`Se han sumado un total de numeros ${con.toString()}, comeinzan con el ${numero1.toString()} hasta el ${numero2.toString()}\n dando un total de ${con2.toString()} numeros`
        }
       
    }
}
let eje=new ejer()