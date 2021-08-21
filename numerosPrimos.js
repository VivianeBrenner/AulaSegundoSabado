//percorrer numeros - for
//condição - se 0 1001 numero primo foi encontrado

let primosEncontrados = 0
let dividendo
let ehPrimo

for(dividendo = 2; primosEncontrados < 1001; dividendo++){      // div = 4 / 2 < 1001
    ehPrimo = true                                              //ehp = t
    for(let divisor = 2; dividendo > divisor; divisor++){            //divi = 2 / 4 > 2 /
        if(dividendo % divisor == 0) {                              //ehP = f
            ehPrimo = false;                                        //4 dividido por 2 == 0                         
            break

        }                            
      
    }

    if(ehPrimo == true){                                            // mentira
        primosEncontrados++                                         // pE = 2
    }
}

console.log(`o 1001 numero primo é ${--dividendo}`)
