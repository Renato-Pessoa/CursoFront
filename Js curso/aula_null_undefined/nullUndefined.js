let valor;
console.log(valor);

valor = null
console.log(valor)
// console.log(valor.toString())

const produto = {}
console.log(produto.price)
console.log(produto)

produto.price = 3.5
console.log(produto)

produto.price = undefined  // Evitar atribuir undefined
console.log(!!produto.price)
console.log(produto.price)

produto.price = null  // Sem preço
console.log(produto.price)