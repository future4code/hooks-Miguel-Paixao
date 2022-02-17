/*
1- Exercícios de interpretação de código
a. undefined = array não foi definida e o a. estava dentro do console
b. null = array foi definida como null e o b. estava dentro do console
c. 11 = pediu pra contar qauntos itens tinha dentra da arrays
d. array não definida erro
e. erro
f. erro*/

// Exercícios de escrita de código
// 2- Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
//"SUBI NUM ÔNIBUS EM MIRROCOS" 29 = Ele pede para transformar tudo em maiusculo, depois subistituir o A pelo I e por fim dizer quantos caracteres tem.


//Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o),

//const nomeDoUsuario = (prompt("Insira seu nome"))
//const emailDoUsuario = (prompt("Insira seu e-mail"))
//console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

/*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista*/

     //a)
    /*let comidasPrediletas = ['comida baiana e acarajé ' , ' pirão de aipim', ' torta de frango', ' salada com batata doce e frango', ' feijoada ou dobradinha']
    let arrayCompleta = comidasPrediletas
    //let arrayCompleta = comidasPrediletas
// b)
    console.log( `Essas são minhas comidas preferidas: 
${comidasPrediletas[0]}
${comidasPrediletas[1]}
${comidasPrediletas[2]}
${comidasPrediletas[3]}
${comidasPrediletas[4]}
  `) 


//c)
let comidaFavorita = prompt('Qual a sua comida preferida?')
let AddComidaFavorita = comidaFavorita
comidasPrediletas[1] = AddComidaFavorita


//console.log("Nova Lista: " + comidasPrediletas) */

/*let listaDeTarefas = []
let primeiraPergunta = prompt(" Você já correu hoje pela manhã?")
let segundaPergunta =  prompt(" Você quer comer brócolis no almoço?") 
let terceiraPergunta = prompt(" Você ja bebeu água hoje?") 
let repostaPrimeira = primeiraPergunta
let respostaSegunda = segundaPergunta
let respostaTerceira = terceiraPergunta

listaDeTarefas.push(repostaPrimeira)
listaDeTarefas.push(respostaSegunda)
listaDeTarefas.push(respostaTerceira)


console.log(listaDeTarefas)*/


//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

//e) Remova da lista o item de índice que o usuário escolheu.

//f) Imprima o array no console */

/*
let tarefaRealizada = ['caminhada', 'beber água', 'comer brócolis']
let usuario = prompt("Escreva a tarefa que foi realizada hoje")
usuario = tarefaRealizada[1]
tarefaRealizada.splice(1, 1)
console.log(tarefaRealizada) */

