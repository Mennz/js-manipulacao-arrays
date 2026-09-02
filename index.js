const { alunos, produtos } = require("./dados");

const nomesAlunos = alunos.map((a) => a.nome);
console.log("nomes:", nomesAlunos);

// map cria array novo, o original nao muda
const precosComDesconto = produtos.map((p) => ({
  ...p,
  preco: p.preco * 0.9,
}));
console.log("com desconto:", precosComDesconto);

const aprovados = alunos.filter((a) => a.nota >= 6);
console.log("aprovados:", aprovados);

const estoqueBaixo = produtos.filter((p) => p.estoque < 5);
console.log("estoque baixo:", estoqueBaixo);

const valorTotalEstoque = produtos.reduce(
  (total, p) => total + p.preco * p.estoque,
  0
);
console.log("valor total em estoque:", valorTotalEstoque);

const somaNotas = alunos.reduce((soma, a) => soma + a.nota, 0);
const mediaNotas = somaNotas / alunos.length;
console.log("media das notas:", mediaNotas.toFixed(2));
