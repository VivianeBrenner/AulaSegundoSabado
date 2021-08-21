//receba data em formato dd/mm/aaaa e escreva a data por extenso

function converteData (data) {
    dia = data.substring(0,2)
    mes = parseInt(data.substring(3,5))
    meses = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto",
    "setembro", "outubro", "novembro", "dezembro"]
    ano = data.substring (6)
console.log(`${dia} de ${meses[mes - 1]} de ${ano}`)

}
converteData("16/02/1993")



