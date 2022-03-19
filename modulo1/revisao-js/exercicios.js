// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

const numerosDaArray = [3, 2, 1, 4, 7]

function retornaTamanhoArray(array) {
    return array.length}


console.log(retornaTamanhoArray(numerosDaArray))

// EXERCÍCIO 02

const alimentos = ['feijão', 'arroz', 'cuzcuz', 'tapioca','aveia']

function retornaArrayInvertido(array) {
      return array.reverse()
    }
    
    console.log(retornaArrayInvertido(alimentos))


// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
    array.sort(function (a, b) {
     if (a < b) return -1
     if (a > b) return 1
  })
 return array

}

// const arrayOrdenado = [3, 2, 1, 4, 7]

// function retornaArrayOrdenado(array) {
//     return array.sort()
  
// }

// console.log(retornaArrayOrdenado(arrayOrdenado))

//EXERCÍCIO 04

const numeros = [1,2,3,4,5,6,7,8,9,10]

 function retornaNumerosPares(array) {
     for (i = 1; i <= array.length; i++)
     if (i % 2 === 0){
       console.log(i)
     }
   }
   
   retornaNumerosPares(numeros)




// EXERCÍCIO 05
 const numerosElevados = [1,2,3,4,5,6,7,8,9,10]

function retornaNumerosParesElevadosADois(array) {
    // let potencia = 0
    for (i = 1; i <= array.length; i++)
    if (i % 2 === 0){
        // potencia = i ** 2
      console.log(i ** 2)
    }
  }
  
  console.log(numerosElevados)
retornaNumerosParesElevadosADois(numerosElevados)


//EXERCÍCIO 06

const meusNumeros = [7,8,5,2,9,4,3,1,6]

function retornaMaiorNumero (array){

  let maiorNumero = 0 // criei uma variavel para armazenar o maior numero

  for (i = 0; i <= array.length; i++){ // fiz um laço para iterar na array

  i > maiorNumero? maiorNumero = i : maiorNumero // utilizei o operador ternário para fazer a comparação com a variavel
  }
  return maiorNumero
}

console.log(retornaMaiorNumero(meusNumeros))

// ---------dsf-sa--------



// EXERCÍCIO 07
 function retornaObjetoEntreDoisNumeros(num1, num2) {

  let maiorNumero
  let menorNumero
  
  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  
  }
  
  const ehDivisivel = maiorNumero % menorNumero === 0
  
  const diferenca = maiorNumero - menorNumero
  
  return {
   maiorNumero: maiorNumero,
   maiorDivisivelPorMenor: ehDivisivel,
   diferenca: diferenca
   }
  } 



  //   let resultado = {}
  //   let maiorNumero = 0
  //   maiorNumero = num1 > num2 ? maiorNumero = num1 : maiorNumero = num2 
  //   let menorNumero = 0 
  //   menorNumero = num1 < num2 ? menorNumero = num1 : menorNumero = num2
  //   resultado.maiorNumero = maiorNumero
  //   num1 % num2 === 0 || num2 % num1 ===0 ? resultado.maiorDivisivelPorMenor = true :
  //   resultado.maiorDivisivelPorMenor = false
  //   let diferença = 0
  //   diferença = maiorNumero - menorNumero
  //   resultado.diferença = diferença
  //   return resultado
  // }
  
  // console.log(retornaObjetoEntreDoisNumeros(50,100))


// EXERCÍCIO 08



//var numbers = [1, 2, 3, 4, 5];

function retornaNPrimeirosPares(n) {

  //for (var i = 0; i < numbers.length; i++) {
    //numbers[i] *= 2;

  //}
  //numbers is now [2, 4, 6, 8, 10]

}

//console.log(retornaNPrimeirosPares())

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  

}



// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
const anonimato = {...pessoa, nome: "ANÔNIMO"}
return anonimato

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   


}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14


function retornaContasComSaldoAtualizado(contas) {

}
// let soma = 0;
// let novoSaldo = 0;

// for(let i = 0; i < contas.length i++ ) {
//  for (let somaCompras = 0; somaCompras < contas[i].compras.length; somaCompras++) {
//     soma += contas[i].compras[somaCompras];
//     novoSaldo = contas[i].saldoTotal - soma;
//     contas[i].saldoTotal = novoSaldo; 
//     soma = 0;
//    }
//    contas[i].compras = []
// }
// return contas;


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}