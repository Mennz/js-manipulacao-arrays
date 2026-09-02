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
