let repetir = true

while(repetir){
    let numero = parseInt( prompt("Logra acertar cuantos balones de oro gano Messi"))

    if(numero === 7){
        repetir= false
        alert("Has acertado")
    }
    else if(isNaN(numero)){
        alert("Solo puedes ingresar numeros");

    } else{
        alert("Sigue intentando")
    }
    
    
}