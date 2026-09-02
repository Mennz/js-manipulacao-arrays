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

const primeiroReprovado = alunos.find((a) => a.nota < 6);
console.log("primeiro reprovado:", primeiroReprovado);

const primeiroMovel = produtos.find((p) => p.categoria === "movel");
console.log("primeiro movel:", primeiroMovel);

const temReprovado = alunos.some((a) => a.nota < 6);
console.log("tem aluno reprovado?", temReprovado);

const todosEmEstoque = produtos.every((p) => p.estoque > 0);
console.log("todos os produtos tem estoque?", todosEmEstoque);

// sort muda o array original, por isso o spread pra copiar antes
const alunosPorNota = [...alunos].sort((a, b) => b.nota - a.nota);
console.log("alunos por nota, do maior pro menor:", alunosPorNota);

const produtosPorPreco = [...produtos].sort((a, b) => a.preco - b.preco);
console.log("produtos por preco, do menor pro maior:", produtosPorPreco);
