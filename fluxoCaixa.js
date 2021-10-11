let sistema = {
    receitas: [100, 300, 500],
    despesas: [400, 50]
}

function soma(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculaSaldo() {
    const saldoReceitas = soma(sistema.receitas)
    const saldoDespesas = soma(sistema.despesas)

    const saldoTotal = saldoReceitas - saldoDespesas

    const saldoOk = saldoTotal >= 0

    let saldoText = "negativo"

    if (saldoOk) {
        saldoText = "positivo"
    }

    console.log(`Seu saldo é ${saldoText}: ${saldoTotal}`)
}

calculaSaldo()
