const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Qual o ano do seu nascimento: ', data => {
    if(typeof data !== 'number'){
        console.log('Entre com um numero') 
        return
    }
    if (data < 2005) {
        console.log('Voce é maior de idade')
        readLine.question('Voce tem habilitação? ', habilitacao => {
            if (habilitacao.toUpperCase() === "SIM") {
                console.log('Voce pode entrar no kart')
            } else {
                console.log('Voce nao pode entrar no Kart')
            }
        })
    } else {
        console.log('Voce é menor de idade.')
    }
});
