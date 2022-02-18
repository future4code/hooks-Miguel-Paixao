//

//1.  Exercícios de interpretação de código
    
    //function minhaFuncao(variavel) {
    	//return variavel * 5
    
/* a) O que vai ser impresso no console?
imprimir 2 da atribuição * 5 do retorno da função = 10
        10 do parametro * 5 da função = 50

 b) O que aconteceria se retirasse os dois `console.log` 
 e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?*/

//R= Não aparece nada por que não declarou nenhum parametro e tbm não iria mostra no console sem o console.log

// 2. Leia o código abaixo
// a) Ela vai verificar se contem a palavra cenoura e se houver colocará tudo em minusculo

// b) ele retorna como true por que ambos contem cenoura

// let textoDoUsuario = prompt("Insira um texto");
// let textoDoUsuario1 = prompt("Insira um texto");
// let textoDoUsuario2 = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario, textoDoUsuario1, textoDoUsuario2)

// console.log(resposta)
// console.log(outraFuncao("Eu gosto de cenoura"))
// console.log(outraFuncao("CENOURA é bom pra vista"))
// console.log(outraFuncao("Cenouras crescem na terra"))

// let usuario = textoDoUsuario

// Exercícios de escrita de código
//1- 

// a)
function miguelDados() {
}
console.log("Eu sou Miguel, tenho 31 anos, moro em Macaé e sou estudante")

function biografia(nome, idade, estado, profissão) {
console.log(`Meu nome é ${nome}, tenho ${idade} anos, moro em ${estado} e minha profissão é ${profissão}`)

}

biografia("Miguel", 31, 'Macaé', 'Estudante')

// 2-
// a)
function soma(num1, num2) {
    const soma = num1 + num2
    return soma
}
console.log(soma(10, 32))

// b)
 function maiorIgual(num1, num2) {
    const compararNum = num1 >= num2
    return

 }

 function recebaUmaMensagem(texto) {
     let mensagem = "Olá, venho lhes avisar que as férias estão acabando"
  return mensagem.length.toUpperCase()
 }
   recebaUmaMensagem()

//  const recebaUmaMensagem = function(mensagem) {
//     const mensagem = "Olá, venho lhes avisar que as férias estão acabando"
//    return mensagem.toUpperCase().length

// }

//return mensagem.toUpperCase().length()