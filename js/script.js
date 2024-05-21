function calcularMedia(notasArray) {
    let soma = 0;

    for (let i = 0; i < notasArray.length; i++) {
        soma += notasArray[i];
    }
    // Calcular a média
    let media = soma / notasArray.length;
    return media;
}


function verificarMedia(media) {
    if (media > 7) {
        document.write("Parabéns você passou na média!");
    } else {
        document.write("Infelizmente você está de recuperação.");
    }
}



function imprimirNomes(nomesArray) {

    nomesArray.forEach(function(nome) {
        document.write(nome + "<br>");
    });
}


function tabuadaDoOito() {

    for (let i = 0; i <= 10; i++) {
        let resultado = 8 * i;

        document.write("8 x " + i + " = " + resultado + "<br>");
    }
}


function obterDadosAluno() {

    let nomeAluno = prompt("Qual o nome do aluno?");
    let idadeAluno = prompt("Qual a idade do aluno?");
    let serieAluno = prompt("Qual a série do aluno?");
    let nomeEscola = prompt("Qual o nome da escola?");
    let materiaFavorita = prompt("Qual a sua matéria favorita?");
    

    let mensagem = "Por favor, confirme os dados inseridos:\n" +
                   "Nome: " + nomeAluno + "\n" +
                   "Idade: " + idadeAluno + "\n" +
                   "Série: " + serieAluno + "\n" +
                   "Escola: " + nomeEscola + "\n" +
                   "Matéria Favorita: " + materiaFavorita + "\n";
    

    let confirmacao = confirm(mensagem);
    

    if (confirmacao) {

        document.write("Informações do Aluno:<br>");
        document.write("Nome: " + nomeAluno + "<br>");
        document.write("Idade: " + idadeAluno + "<br>");
        document.write("Série: " + serieAluno + "<br>");
        document.write("Escola: " + nomeEscola + "<br>");
        document.write("Matéria Favorita: " + materiaFavorita + "<br>");
    } else {

        document.write("Os dados não foram confirmados.");
    }
}




function calcularMedia(notasArray) {
    let soma = 0;

    for (let i = 0; i < notasArray.length; i++) {
        soma += notasArray[i];
    }

    let media = soma / notasArray.length;
    return media;
}


function capturarDados() {
    
    let nomeMateria = prompt("Digite o nome da matéria:");
    
    
    let notas = [];
    let i = 0;
    
    
    while (i < 4) {
        let nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));
    
        notas.push(nota);
        i++;
    }
    
    
    let materiaObj = {
        nomeMateria: nomeMateria,
        notas: notas
    };
    
    
    let mediaNotas = calcularMedia(materiaObj.notas);
    
    
    document.write("Matéria: " + materiaObj.nomeMateria + "<br>");
    document.write("Notas: " + materiaObj.notas.join(", ") + "<br>");
    document.write("Média: " + mediaNotas + "<br>");
}




function encontrarMaiorNumero(numerosArray) {

    let maiorNumero = -Infinity;


    for (let i = 0; i < numerosArray.length; i++) {

        if (numerosArray[i] > maiorNumero) {
            maiorNumero = numerosArray[i];
        }
    }


    return maiorNumero;
}


let notas = [7.5, 8.0, 6.5, 9.0];
let nomesAlunos = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];



let mediaNotas = calcularMedia(notas);
verificarMedia(mediaNotas)
console.log("A média das notas é: " + mediaNotas);



imprimirNomes(nomesAlunos);


tabuadaDoOito();



obterDadosAluno();


capturarDados();


let numeros = [3, 7, 2, 10, 6, 8];
let maiorNumero = encontrarMaiorNumero(numeros);
console.log("O maior número é: " + maiorNumero);