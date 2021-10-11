function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahExists = degree.toUpperCase().includes('F')
    
    // fluxo de erro
    if(!celsiusExists && !fahExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('50Z'))
} catch (error) {
    console.log(error.message)
}
