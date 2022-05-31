/*Uma amiga de Alex deu uma coleção de filmes para ela de presente, e Alex está animada para assistir todos eles 
o mais rápido possível. A duração dos filmes é dada em um vetor duracoes [n], onde o n é o número do filme, e 
cada filme dura entre 1.01 e 3.00 horas (até duas casas decimais). Alex quer gastar no máximo 3.00 horas 
assistindo filmes por dia, mas também quer assistir a coleção completa no mínimo números de dias possível. Alex 
nunca para de assistir um filme na metade. Isso é, se Alex escolheu um filme, Alex assistir um filme por completo 
no mesmo dia. Ache o número mínimo de dias necessários para assistir a coleção de filme completa.
Exemplo:
n = 5
duracoes = [ 1.90, 1.04, 1.25, 2.5, 1.75 ]

Considerando um passo a passo de 1 em 1, Alex consegue assistir os filmes em mínimo de 3 dias:
1. Dia 1: primeiro e segundos filmes: 1.90 + 1.04 = 2.94 _< 3.00
2. Dia 2: quarto filme: 2.5 _< 3.00
3. Dia 3: terceiro e quinto filmes: 1.25 + 1.75 = 3.00_<

Descrição da Função:
Complete a função acharMinimoDeDias

acharMinimoDeDias tem o seguinte parâmetro:
- float duracoes [n] : a duração de cada filme.

Retorna:
- int: o mínimo número de dias necessários para assistir todos os filmes.

Restrições:
1 _< n _< 1000
1.01 _< duracoes [i] _< 3.0*/

var duracoes = [
  '8.77', '9.47', '4.41', '8.26', '1.84', '2.75', '0.95',
  '6.22', '6.23', '7.75', '6.43', '6.42', '6.95', '8.59',
  '3.32', '5.81', '9.15', '9.92', '7.31', '4.70', '5.74',
  '3.89', '9.67', '9.33', '2.24', '0.76', '0.68', '5.58',
  '1.65', '2.27', '1.69', '4.47', '6.86', '6.72', '2.27',
  '9.83', '2.84', '9.97', '3.56', '0.54', '3.85', '1.45',
  '6.05', '5.78', '9.94', '7.10', '0.89', '3.78', '2.35',
  '6.23', '7.38', '8.52', '1.80', '9.96', '8.34', '7.31',
  '9.58', '7.49', '1.84', '0.07', '8.77', '1.56', '8.02',
  '8.35', '0.33', '1.34', '4.87', '4.44', '5.63', '3.71',
  '7.00', '7.56', '7.67', '0.57', '7.96', '1.53', '8.94',
  '8.76', '7.68', '3.79', '2.13', '5.45', '8.50', '1.88',
  '7.78', '7.18', '5.45', '8.71', '9.84', '0.90', '1.12',
  '8.32', '8.75', '9.47', '0.56', '4.11', '3.44', '1.86',
  '5.39', '4.76', '7.10', '0.89', '3.78', '2.35', '4.76',
  '6.23', '7.38', '8.52', '1.80', '9.96', '8.34', '7.31',
  '9.58', '7.49', '1.84', '0.07', '8.77', '1.56', '8.02',
  '8.35', '0.33', '1.34', '4.87', '4.44', '5.63', '3.71',
  '7.00', '7.56', '7.67', '0.57', '7.96', '1.53', '8.94',
  '8.76', '7.68', '3.79', '2.13', '5.45', '8.50', '1.88',
  '7.78', '7.18', '5.45', '8.71', '9.84', '0.90', '1.12',
  '8.32', '8.75', '9.47', '0.56', '4.11', '3.44', '1.86',
  '5.39', '4.76'
];
var listaCorreta = [];
var segundaLista = [];
var dias = 0;

for (let index = 0; index < duracoes.length; index++) {
  if (duracoes[index] <= 3.0 && duracoes[index] > 1.0) {
    listaCorreta.push(duracoes[index]);
  }
}

for (let index = 0; index < listaCorreta.length; index++) {
  if (listaCorreta[index] > 2) {
    dias += 1;
  } else {
    segundaLista.push(listaCorreta[index]);
  }
}
segundaLista.sort();

while (segundaLista.length >= 1) {
  for (let index = 0; index < segundaLista.length; index++) {
    let valor = segundaLista[index] + segundaLista[segundaLista.length - 1];
    if (valor <= 3) {
      segundaLista.splice([index]);
      segundaLista.splice([segundaLista.length - 1]);
      dias += 1;
    } else {
      segundaLista.splice([segundaLista.length - 1]);
      dias += 1;
      break;
    }
  }
}

console.log(dias + " dias");
console.log(segundaLista.length);

