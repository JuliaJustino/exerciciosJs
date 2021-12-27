function imc(){
    let altura = 1.50
    let peso = 56


// IMC = Peso ÷ (Altura × Altura)
    let res = peso/(altura**2)
    console.log(res)

    if (res <= 18.5) {
        console.log('magreza')
    } 
    else if (res > 18.5 && res <= 24.9){
        console.log('Normal')
    }
    else if(res > 24.9 && res <= 40.0){
        console.log('acima do peso')
    }
    if (res>40.0) {
        console.log('grave')
    }
    /*
    Menor que 18,5: Magreza
    Entre 18,5 e 24,9: Normal
    Maior que 40,0: Obesidade Grave
    */
}
console.log(imc())

