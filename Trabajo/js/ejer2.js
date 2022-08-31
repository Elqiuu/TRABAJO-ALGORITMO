class mayor2numeros{
    sumar(){
      let numero1 = document.getElementById("numero1").value
      numero1 = parseFloat(numero1)
      let numero2 = document.getElementById("numero2").value
      numero2 = parseFloat(numero2)
      if(numero1>numero2){
        resp.textContent=`El numero mayor es ${numero1.toString()}`
  
      }else if(numero2>numero1){
        resp.textContent=`El numero mayor es ${numero2.toString()}`
      }
    }
  
  }
  let ejer2=new mayor2numeros()