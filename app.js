/*********************************************************************************************************
* Objetivo: Calcular a média de um aluno
* Data : 09/08/23
* Autor: Eduardo Vilas Boas
* Versão: 1.0
**********************************************************************************************************/

console.log('Atividade 03 - Node.JS');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 *  var - Permite criar uma variável no escopo global do projeto
 *  let - Permite criar uma variável no escopo Local do projeto (esta variável irá existir somente dentro do seu bloco de programação)
 *  const - Permite criar um espaço em memória para guarda um conteúdo que não sofrerá alteração e pode ser no escopo Global ou Local
 * 
 * 
 * 
 * Operadores de comparação 
 * 
 *  == Permite verificar a igualdade
 *  < Permite verificar o menor valor
 *  > Permite verificar o maior valor
 *  <= Permite verificar o menor valor ou igualdade
 *  >= Permite verificar o maior valor ou igualdade
 *  != permite verificar a diferença entre dois conteúdos
 *  === Permite verificar a igualdade entre conteúdos e a igualdade nos tipos de dados
 *  !== Permite verificar a diferença de comandos e a igualdade de tipo de dados
 * 
 * 
 * Operadores lógicos
 *      E       AND     &&
 *      ||      
 */

entradaDados.question('Digite seu nome: ', function(nomeUsuario){

    var nome = nomeUsuario;

    entradaDados.question('Coloque o curso: ', function(curso__){

        var curso = curso__;

        entradaDados.question('Coloque a Disciplina: ', function(disciplina__){

            var disciplina = disciplina__;

            entradaDados.question('Dígite a primeira nota: ', function(notaUm) {

                var nota1 = notaUm.replace(',','.');

                entradaDados.question('Dígite a segunda nota: ', function(notaDois) {

                    var nota2 = notaDois.replace(',','.');

                    entradaDados.question('Dígite a terceira nota: ', function(notaTres) {

                        var nota3 = notaTres.replace(',','.');

                        entradaDados.question('Dígite a quarta nota: ', function(notaQuatro) {

                            var nota4 = notaQuatro.replace(',','.');

                            //Validação de entrada de dados vazia

                            if(nota1 === '' || nota2 == '' || nota3 == '' || nota4 == ''){

                                console.log('ERRO: É obrigatório o preenchimento de todas as notas!');
                                entradaDados.close();

                            //Validação para verficar se as entradas de dados são numéricas    
                            // isNaN() - permite verificar se o conteúdo da variável é numérica

                            }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){

                                console.log('ERRO: É obrigatório a entrada apenas de valores numéricos!');
                                entradaDados.close();

                            //Validação para limitar a entrada de valores entre 0 e 10

                            }else if(nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0 || nota4 > 10 || nota4 < 0){

                                console.log('ERRO: É obrigatório apenas a entrada de valores entre 0 e 10')
                                entradaDados.close();

                            }else{

                           let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;
                           let statusAluno;

                           if(media <= 4.9){
                            statusAluno = 'REPROVADO';
                           }else if(media >= 5 && media <= 6.9){
                            statusAluno = 'EXAME';
                           }else if(media >= 7 && media <= 10){
                            statusAluno = 'APROVADO';
                           }

            console.log('\n********** BOLETIM ESCOLAR **********\nNome: ' +nome+ '\nCurso: ' +curso+ '\nDisciplina: ' +disciplina+ '\nNotas: ' +nota1+',', +nota2+',', +nota3+',', +nota4+ '\nMédia: ' +String(media.toFixed(1)).replace('.',','));
            console.log('O aluno ' + nome + ' está ' + statusAluno);
            entradaDados.close();
                                
                                };

                            });

                        });

                    });

                });

            });

        });

    });
