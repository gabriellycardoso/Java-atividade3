    let div = document.getElementById("teste");
    let altura = document.getElementById("altura");
    let peso = document.getElementById("peso");

    calcularimc = () => {
        let valor = parseInt (altura.value)
        let geral =  parseInt (peso.value)

        let imc = geral / (valor * valor) 
        console.log(valor)
        console.log(geral)
        console.log(imc)
        div.innerHTML = imc
    } 
    
    
    

    
     

    
    