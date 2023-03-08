const reaLine =require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

const minhaPrimeiraConstanteString = 'Minha primeira constante'
console.log(minhaPrimeiraConstanteString)

let leitutaDeCampo;
reaLine.question('Informe a sua idade:', input =>{
    leitutaDeCampo=input;
console.log(`o usuario digitou: ${leitutaDeCampo}`);});