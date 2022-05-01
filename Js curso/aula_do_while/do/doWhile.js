const getInteiroAleatorioEntre = function(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let option = 0

do {
    option = getInteiroAleatorioEntre(-1, 10)
    console.log(option)
} while (option != -1) 