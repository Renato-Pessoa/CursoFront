const escola = "Cod3r"

console.log(escola.charAt(4))  // Retorna a letra do indice 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))  // Retorna o valor da tabela unicode
console.log(escola.indexOf("3"))  // Retorna a posicao do item
console.log(escola.substring(1))  // Retorna a partir da posicao escolhida
console.log(escola.substring(0,3))  // Nao inclui o indice final
console.log("escola ".concat(escola))
console.log(escola.replace(3,"e"))  // Substitui o elemento do indice passado.
console.log("ana, maria, tiago".split(","))  // Transforma a string em um array

console.log(`ola ${escola}`)