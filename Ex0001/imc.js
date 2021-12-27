function imc(){
    let txtAltura = document.getElementById('altura')
    let txtPeso = document.getElementById('peso')
    let res = document.getElementById('res')

    let altura = Number(txtAltura.value)
    altura = altura / 100;
    let peso = Number(txtPeso.value)

    let calcu = peso/(altura**2)
    let cal = Math.round(calcu)
    res.innerHTML = `Seu  IMC é: ${cal}`
    

    if (cal < 17) {
        res.innerHTML += ('</br> Muito abaixo do peso')
      }
       else if (res > 17 && res <= 18.49){
        res.innerHTML += ("</br> Abaixo do peso")
      } 
      else if (res >= 18.5 && res <= 24.99){
        res.innerHTML += ("</br> Peso normal")
      } 
      else if (res >= 25 && res <= 29.99){
        res.innerHTML += ("</br> Acima do peso")
      }
      else if (res >= 30 && res <= 34.99){
        res.innerHTML += ("</br> Obesidade I")
      } 
      else {
        res.innerHTML += ("</br> Obesidade II")
      }


    }
    