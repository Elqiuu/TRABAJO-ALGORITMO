class eje{
    per(){
        let numero=document.getElementById("numero").value
        numero=parseFloat(numero)
        let con=0
        con=0
        let per=0
        while(con<numero){
            if(numero%con==0){
         per=per+con
            } 
            con=con+1
        }
        if(per==numero){
            res.textContent=`El numero ${numero.toString()} es perfecto`
        }else if(per!=numero){
            res.textContent=`El numero ${numero.toString()} no es perfecto`
        }
    }
}
let ejer=new eje()