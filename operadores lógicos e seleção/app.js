const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Esse programa sabera se voce é maior de 18 anos e tem habilitação para digirir kart!');
console.log('Além das suas verificações precisamos verificar se vc esta na lista de presença do horario!');

readLine.question('Qual o ano do seu nascimento? ', ano => {
    if (ano > 2005) {
        console.log('Voçe não tem 18 anos');
    } else {
        readLine.question('Voce tem habilitação? (SIM /Não)', temHabilitação => {
            if (!(temHabilitação.toUpperCase() === "SIM")) {
                console.log('Voce não tem habilitaçaõ para entrar na kart');
            } else {
                readLine.question('Qual o seu nome?', nome => {
                    switch (nome.toUpperCase()) {
                        case 'SERGIO':
                            console.log('Bem vindo ao Kart sergio')
                            break;
                        case 'PAULO':
                            console.log('Bem vindo ao Kart Paulo')
                            break;
                        default:
                            console.log("Seu nome nao esta na lista")
                            break
                    }
                });
            }
        })
    }
});   