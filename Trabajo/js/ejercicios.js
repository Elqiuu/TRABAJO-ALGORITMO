class Ejercicios1{
    venta(){
      //console.log("venta..")
      let costo = document.getElementById("costo").value
      costo = parseFloat(costo)
      let des = document.getElementById("descuento").value
      des = parseFloat(des)
      let resp = document.getElementById("resp")
      let iva = document.getElementById("iva").checked
      let valorIva = 0,sub=0,tot=0,valordes=0
      const iva12 = 0.12
      valordes = costo*(des/100)
      sub = costo-valordes
      if (iva==true){
        valorIva=sub*iva12
      }
      tot=sub+valorIva
      
      resp.textContent=`Costo:${costo.toString()}\nDescuento:${valordes.toString()}\nSubtotal:${sub.toString()}\nIva:${valorIva.toString()}\nTotal:${tot.toString()}` 
      console.log(resp.textContent)
      console.log(costo,valordes,valorIva,sub,tot)

    }

}
let ejer = new Ejercicios1()
//ejer.venta()