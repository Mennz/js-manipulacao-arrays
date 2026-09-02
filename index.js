const { alunos, produtos } = require("./dados");

console.log("== ALUNOS ==");

const nomesAlunos = alunos.map((a) => a.nome);
console.log("nomes:", nomesAlunos);

const aprovados = alunos.filter((a) => a.nota >= 6);
console.log("aprovados:", aprovados);

const somaNotas = alunos.reduce((soma, a) => soma + a.nota, 0);
const mediaNotas = somaNotas / alunos.length;
console.log("media das notas:", mediaNotas.toFixed(2));

const primeiroReprovado = alunos.find((a) => a.nota < 6);
console.log("primeiro reprovado:", primeiroReprovado);

const temReprovado = alunos.some((a) => a.nota < 6);
console.log("tem aluno reprovado?", temReprovado);

// sort muda o array original, por isso o spread pra copiar antes
const alunosPorNota = [...alunos].sort((a, b) => b.nota - a.nota);
console.log("alunos por nota, do maior pro menor:", alunosPorNota);

console.log("\n== PRODUTOS ==");

// map cria array novo, o original nao muda
const precosComDesconto = produtos.map((p) => ({
  ...p,
  preco: p.preco * 0.9,
}));
console.log("com desconto:", precosComDesconto);

const estoqueBaixo = produtos.filter((p) => p.estoque < 5);
console.log("estoque baixo:", estoqueBaixo);

const valorTotalEstoque = produtos.reduce(
  (total, p) => total + p.preco * p.estoque,
  0
);
console.log("valor total em estoque:", valorTotalEstoque);

const primeiroMovel = produtos.find((p) => p.categoria === "movel");
console.log("primeiro movel:", primeiroMovel);

const todosEmEstoque = produtos.every((p) => p.estoque > 0);
console.log("todos os produtos tem estoque?", todosEmEstoque);

const produtosPorPreco = [...produtos].sort((a, b) => a.preco - b.preco);
console.log("produtos por preco, do menor pro maior:", produtosPorPreco);
