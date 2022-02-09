// Exercício de variáveis

 
// 1- R= 
/*let a = 10
let b = 10
console.log(b)
b = 10 
b = 5
console.log(a = 10, b = 5)*/

/* 2- R=
let a = 10
let b = 20
c = a       c = 10
b = c       b= 10
a = b       a = 10
console.log(a = 10, b = 10, c = 10) */

/*
 3- R=
let horaTrabalhadaDia = prompt("Quantas horas você trabalha por dia?")
let recebimentoDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${recebimentoDia/horaTrabalhadaDia} por hora`)
*/

// Exercicio de escrita de código
//1- R=

let nome 
let idade 
console.log(typeof nome, typeof idade)
// Resposta = undefined undefined  =  Porque minha variavel não foi atribuida um valor 
let nome = prompt("qual é seu nome?")
let idade = prompt("qual é sua idade?")
console.log(typeof nome, typeof idade)
// Resposta = Mudou pra string por que pedi a resposta em texto

let nome = "Jerson" 
let idade = 30   
console.log("Olá " + nome +"," + " você tem " + idade + " anos")

// 2- 

let gostaDeRock = 'você gosta de ouvir rock - '
let euGostoRock = true
let gostaDeSertanejo = 'você gosta de sertanejo - '
let euGostoSertanejo = false
let gostaDeJazz = 'você gosta de dançar Jazz - '
let eugostoJazz = true
let euGostoRock1 = 'sim'
let euGostoSertanejo1 = 'não'
let eugostoJazz1 = 'sim'
console.log(gostaDeJazz, eugostoJazz1)

//3- R=
let a = 10
let b = 25
c = a
a = b
b = c
console.log("O novo valor de a é " +  a)
console.log("O novo valor de b é " +  b)

// Desafio 1
let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))
let resultado = numero1 + numero2
console.log(resultado)

// Desafio 2
let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))
let resultado = numero1 * numero2
console.log(resultado)
