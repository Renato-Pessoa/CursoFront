const pessoa = {
    name: 'Renato',
    age: 20,
    address: {
        street: "Rua doutor roland simons",
        number: 599
    }
}

const {name, age} = pessoa
console.log(name, age)

const {lastName} = pessoa
console.log(lastName)

const {address:{street, number, zipCode}} = pessoa
console.log(street, number, zipCode)