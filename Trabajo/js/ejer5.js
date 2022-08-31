class ejercicio3{
    Present(){
      let Numero1
      let Numero2
        Numero1=document.getElementById("Numero1").value;
        Numero1=parseFloat(Numero1)
        Numero2=document.getElementById("Numero2").value;
        Numero2=parseFloat(Numero2)
        if(Numero2>Numero1){
          for(let i=Numero1; i<=Numero2; i++){
            res.textContent+=`${i.toString()}\n`;
          }
        }else if(Numero1>Numero2){
          for(let i=Numero2; i<=Numero1; i++){
            res.textContent+=`${i.toString()}\n`;
        }
        }
      }
    }

let ejer= new ejercicio3()