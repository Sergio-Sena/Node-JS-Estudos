try {
    const listaDeProdutosDisponiveis = [
        "Pão",
        "leite",
        "Café",
        "Laranja",
        "Macarrão",
        "Sabonete",
        "Detergente"
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Esses produtos nos temos: ${produto}`));
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto  => produto === argumento);
    })
    
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Esse produtos nós não temos: ${argumento}`));
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Esse prosuto esta disponovel: ${produto}`));
    
} catch (e) {
    console.log(`Nao foi possivel completar a sua lista. Contate o ADB`);
    
}
