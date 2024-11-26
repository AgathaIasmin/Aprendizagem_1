let matriz1 = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
 ];
 
 let matriz2 = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
 ];
 
 let matriz3 = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
 ];
 
 function gerarMatriz1() {
    for (let i = 0; i < 7; i++) {
       for (let j = 0; j < 7; j++) {
          matriz1[i][j] = gerarAleatorio(20, 1);
       }
    }
    return matriz1;
 }
 
 function gerarMatriz2() {
    for (let i = 0; i < 7; i++) {
       for (let j = 0; j < 7; j++) {
          matriz2[i][j] = gerarAleatorio(20, 1);
       }
    }
    return matriz2;
 }
 
 function somarMatrizes() {
    for (let i = 0; i < 7; i++) {
       for (let j = 0; j < 7; j++) {
          matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
       }
    }
    return matriz3;
 }
 
 function exibirMatriz(matriz, elementoId) {
    let html = '<table>';
    for (let row of matriz) {
       html += '<tr>';
       for (let value of row) {
          html += `<td>${value}</td>`;
       }
       html += '</tr>';
    }
    html += '</table>';
    document.getElementById(elementoId).innerHTML = html;
 }
 
 document.getElementById('gerarMatrizesBtn').addEventListener('click', () => {
    gerarMatriz1();
    gerarMatriz2();
    somarMatrizes();
 
    exibirMatriz(matriz1, 'matriz1');
    exibirMatriz(matriz2, 'matriz2');
    exibirMatriz(matriz3, 'matriz3');
 });

 let matriz4 = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
 ];
 
 function gerarMatriz3() {
    for (let i = 0; i < 7; i++) {
       for (let j = 0; j < 7; j++) {
          matriz4[i][j] = gerarAleatorio(1, 20);
       }
    }
    console.table(matriz4);
    exibirMatriz1();
 }
 
 function exibirMatriz1() {
    let matrizDiv = document.getElementById('matriz4');
    let html = '<table>';
    for (let i = 0; i < matriz4.length; i++) {
       html += '<tr>';
       for (let j = 0; j < matriz4[i].length; j++) {
          html += `<td>${matriz4[i][j]}</td>`;
       }
       html += '</tr>';
    }
    html += '</table>';
    matrizDiv.innerHTML = html;
 }
 
 function somarTres() {
    let soma = 0;
    for (let i = 0; i < 7; i++) {
       for (let j = 0; j < 7; j++) {
          if (matriz4[i][j] % 3 === 0) {
             soma += matriz4[i][j];
          }
       }
    }
    document.getElementById('somaDivisiveisPor3').innerText = `A soma dos elementos divisíveis por 3 é: ${soma}`;
 }
 
 // Event listener para gerar a matriz 3 e somar elementos divisíveis por 3
 document.getElementById('gerarMatrizes1Btn').addEventListener('click', function () {
    gerarMatriz3();
    somarTres();
 });