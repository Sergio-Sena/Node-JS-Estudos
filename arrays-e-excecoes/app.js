const listaDeProdutos = [
    "Pão",
    "leite",
    "cafe",
    "laranja",
    "Macarrão",
    "Deternte",
    "Sabonete",
];

const listaDeArgumentos = process.argv.slice(2);

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
    return listaDeArgumentos.find(argumento => argumento === produto);
})

listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Estes produtos nos temos: ${produto}`))
