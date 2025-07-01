let num = [5,8,2,9,3]

num.sort()  /*ordena por tamanho*/
num.push(5) /*acrescenta*/
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length}posições`)
console.log(num [3])
console.log(`O primeiro valor do vetor é ${num[0]}`) 

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(` valor está na posição ${pos}`)
}

