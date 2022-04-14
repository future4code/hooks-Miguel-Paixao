// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
//function calculaAreaRetangulo(altura, largura) {

    //    altura = Number(prompt("Digite a altura"))
    //    largura = Number(prompt("Digite a largura"))

    //   let areaRetangulo = altura * largura
    //   let resultado = areaRetangulo

    //  console.log(resultado) 

// }
// calculaAreaRetangulo()

// EXERCÍCIO 02
//function imprimeIdade(ano, nascimento ) {

//  ano = Number(prompt("Digite o ano"))
// nascimento = Number(prompt("Digite o nascimento"))

//   let idadeAtual = ano - nascimento
//   let resultado = idadeAtual

//   console.log(resultado)
//   }

//  imprimeIdade()



// EXERCÍCIO 03
// function calculaIMC(peso, altura) {
 
// let pesoAtual =  peso 
//  let alturaAtual = altura 
//   let imc = pesoAtual / (alturaAtual * alturaAtual)
//   return imc

// }



// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
 //   const nomeUsuario = nome
//   const idadeUsuario = idade
//   const emailUsuario = email

//   console.log(` Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e meu email é ${emailUsuario}.  `)

 }
//   imprimeInformacoesUsuario("Miguel", 31, "miguelpaixao20@gmail.com" )

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let corFavorita = []

  const cor1 = prompt("Insira uma cor")
  const cor2 = prompt("Insira outra cor")
  const cor3 = prompt("Insira mais uma cor")

 corFavorita.push(cor1)
 corFavorita.push(cor2)
 corFavorita.push(cor3)
console.log(corFavorita)

}



// EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
// let palavra = string
// let maiuscula = palavra.toUpperCase()
//  return maiuscula

// }

//console.log(retornaStringEmMaiuscula('banana'))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  

}

// EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
//  string1 = "abc" 
//  lstring2 = "cba"

// let tamanhoString = string1.includes & string2.includes()
// return tamanhoString
// }

// checaStringsMesmoTamanho()

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]

}
console.log(retornaPrimeiroElemento([1,2,3]))

// // EXERCÍCIO 10
// function retornaUltimoElemento(array) {
//   array = ["macã", "banana", "goiaba" ]
//   return array[2]

// }
// console.log(retornaUltimoElemento([]))

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}


//Nesta temos a variável day_array com os dias da semana, a variável date_full que recebe o input da data e temos uma função chamada calcularBissexto que é onde faz a verificação da data.

  //A verificação feita na função calcularBissexto é:
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 
  let day_array = 7
  let date_full = 24
if (ano % 4 == 0 & ano % 100  ==! 0 ){

  console.log("ano bissexto")
}

checaAnoBissexto()


//       Se ano % 4 é == 0 E ano módulo 100 é diferente de 0 então, bissexto=true
//       Se ano módulo 400 é 0 então, bissexto=true;
//       Qualquer caso diferente então, bissexto=false;

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
