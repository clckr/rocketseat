function getX(x) {
    let xA = x >= 90 && x <= 100
    let xB = x >= 80 && x <= 89
    let xC = x >= 70 && x <= 79
    let xD = x >= 60 && x <= 69
    let xF = x < 60 && x >= 0

    let xFinal;

    if (xA) {
        xFinal = "A"
    } else if (xB) {
        xFinal = "B"
    } else if (xC) {
        xFinal = "C"
    } else if (xD) {
        xFinal = "D"
    } else if (xF) {
        xFinal = "F"
    } else {
        xFinal = "Nota inválida"
    }

    return xFinal

}

console.log(getX(38))
console.log(getX(60))
console.log(getX(80))
