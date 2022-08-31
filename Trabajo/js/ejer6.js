class ejercico4{
    sumar(){
        let limite=document.getElementById("limite").value
        limite=parseFloat(limite)
        let con=0
        for(let i=1; i<=limite; i++){
        if(i%2==0){
            con=i+con
        }
       }
       resp.textContent= `El valor de la suma de los numeros pares desde el 1 hasta el numero ${limite.toString()} es igual a: ${con.toString()}`
     }
    }
    let ejer=new ejercico4()