let notas = [7.5, 8.0, 6.5, 9.0];


function calcularMedia(notasArray) {
    let soma = 0;

    for (let i = 0; i < notasArray.length; i++) {
        soma += notasArray[i];

    // Calcular a média
    let media = soma / notasArray.length;
    return media;
}


let mediaNotas = calcularMedia(notas);
console.log("A média das notas é: " + mediaNotas);
