const listaDeProdutos = [
    "Pão",
    "leite",
    "cafe",
    "laranja",
    "Macarrão",
    "Sabonete",
    "Deternte",
];

const listaDeArgumentos = process.argv.slice(2);

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutos.filter(produto => {
    return listaDeArgumentos.find(argumento => argumento === produto);
});

listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Estes produtos nos temos: ${produto}`))
