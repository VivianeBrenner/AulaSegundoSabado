/**crie uma classe que modele uma bomba de combustivel e permite definir a capacidade da bomba, 
 * o preco do combustivel por litro e permita encher a bomba (sempre encher completamente) e 
 * consultar sua quantidade de combustível. 
 * É necessário também que seja permitido abastecer 
 * por quantidade de litros (retornando o valor a ser pago). 
 * Deve ser permitido também alterar o valor do preço por litro deve ser tratada a situaçao de 
 * não haver combustivel suficiente na bomba para um determinado abastecimento. 
 * A bomba não deve aceitar preço zero ou negativo**/

class bombaCombustivel {
   //atributos
    constructor(valorCombustivel, capacidadeCombustivel){
        this.valorCombustivel = valorCombustivel
        this.capacidadeCombustivel = capacidadeCombustivel
        this.qtdCombustivel = capacidadeCombustivel

    }
    
    //metodos
    
    encheBomba(qtdCombustivel){
        if(this.qtdCombustivel == this.capacidadeCombustivel){
            console.log("a bomba ta full")
        } else {
            this.qtdCombustivel = this.capacidadeCombustivel
            console.log("Enchendo a bomba...3...2...1!")
        }
    }
    
    abastecerCarro(litros){
        if(this.qtdCombustivel >= litros){
           // this.qtdCombustivel = this.qtdCombustivel - litros ou
           this.qtdCombustivel -= litros
           console.log(`Abastecido com sucesso e você vai pagar ${litros*this.valorCombustivel}`)
        } else {
            console.log(`não temos essa quantidade de gasolina. Só temos ${this.qtdCombustivel}`)
        }
    } 

    ajustarValorCombustivel(novoValor){
        if(novoValor > 0 && typeof(novoValor) == "number"){
            this.valorCombustivel = novoValor;
        } else {
            console.log("Vai liberar de graça!! uhuul")
        }
    }
}
 
const bomba1 = new bombaCombustivel(10,50)

//console.log(bomba1.valorCombustivel)

//bomba1.ajustarValorCombustivel(-2)
//console.log(bomba1.valorCombustivel)

//bomba1.encheBomba()

//let num = 19
//console.log(typeof(num))

bomba1.abastecerCarro(20)
bomba1.ajustarValorCombustivel(5)
bomba1.abastecerCarro(20)
bomba1.abastecerCarro(20)
bomba1.encheBomba()
bomba1.abastecerCarro(20)
