class ejercicio{
    divi(){
        let n1=0
        let numero=document.getElementById("numero").value
        numero=parseFloat(numero);
        n1=numero-1;
        res.textContent+=`Los divisores del numero ${numero.toString()}\n` 
        while(n1>0){
            if(numero%n1==0){
                res.textContent+=`Son: ${n1.toString()}\n` 
            }
            n1=n1-1
        }
    }
}
let final=new ejercicio