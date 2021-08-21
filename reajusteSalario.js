//Faça um programa que recebe o salario de um colaborador 
//e calcule reajuste segundo o seguinte criterio, baseado no salario atual:
//salario até R$ 280,00(incluindo): aumento de 20 %
//salarios entre 280 e 700: aumento de 15%
//salario entre 700 e 1500: aumento de 10%
//salarios de 1500 em diante: aumento de 5%
//apos o aumento ser calculado, deverá ser informado: o salario antes do reajuste;
//o percentual de aumento; o valor do aumento; o novo salario após o aumento

//class salario {
 //   constructor(salarioAtual, percentualDeAumento)
 //   salarioAtual = 
 //   percentualDeAumento = 
 //   novoSalario = 
//}

function reajusteSalarial(salario) {
    let percentualReajuste;
  
    if(salario <= 280){
     percentualReajuste = 0.2;
    }
     else if(salario <= 700){
         percentualReajuste = 0.15;
     }
     else if(salario <= 1500){
         percentualReajuste = 0.1;

     } else { 
         percentualReajuste = 0.05;
         
     }
     let valorAumento = salario * percentualReajuste;
     
     console.log(
    `Salário atual: ${salario}, 
    percentual de aumento aplicado: ${percentualReajuste*100}%,
    valor do aumento: ${valorAumento}
    novo salário: ${salario + valorAumento}`)
}

reajusteSalarial(150);
reajusteSalarial(300);
reajusteSalarial(900);
reajusteSalarial(2000);
