class tarea{
    numeros(){
        let numero
       numero = document.getElementById("numero").value
       numero=parseFloat(numero)
       switch(numero){
        case 1: res.textContent="El día es lunes"
        break
        case 2: res.textContent="El día es martes"
        break
        case 3: res.textContent="El día es miercoles"
        break
        case 4: res.textContent="El día es jueves"
        break
        case 5: res.textContent="El día es viernes"
        break
        case 6: res.textContent="El día es sabado"
        break
        case 7: res.textContent="El día es domingo"
        break
        default: res.textContent="El día que ha ingresado no existe"
       }
    }
}
let ejer=new tarea()