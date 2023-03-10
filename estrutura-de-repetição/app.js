
const listaArgumentos = (process.argv.slice(2));

console.log('---------------------------- Controlador For ----------------------------');
for (let controladorfor = 0; controladorfor < listaArgumentos.length; controladorfor++) {
    console.log(`Posição controlador ${controladorfor} valor lido = ${listaArgumentos[controladorfor]}}`)
};

console.log('---------------------------- Controlador While ----------------------------');
let controladorWhile = 0;
while (controladorWhile < listaArgumentos.length) {
    console.log(`Posicção ${controladorWhile}valor lido ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('---------------------------- Controlador DoWhile ----------------------------');
let controladorDoWhile = 0;
do {
    console.log(`posição ${controladorDoWhile} valor lido ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
} while (controladorDoWhile < listaArgumentos.length)

console.log('---------------------------- Controlador For OF ----------------------------');
for(const argumento of listaArgumentos){
   console.log(`valor lido ${argumento}`);
}; 


/*
console.log('----------------------------Arrays ----------------------------');

console.log('.filter()-> Filtra uma lista de checagem e rerona uma lista somente com as condições atendidas')
console.log('.map()->  Trasnforna a linha em algo que voçe deseja')
console.log('.find()-> Encontra o primeiro registro das lista que atende as condicões e retorna o mesmo')
console.log('.sort()-> Ordena a lista de acordo com a condição ou atributo passado')
console.log('.push()-> Adiciona um ou mais elementos na lista')

Uma função anônima é uma instrução ou expressão "embutida" que pode ser usada em qualquer outro método que um dos seus parâmetros de entrada seja um callback.

São muito uteis quando vamos trabalhar com listas ou processamento assíncrono, pois você passa o comportamento para aquele método e no momento exato que aquele método precisar do comportamento ele o executará tornando nosso código mais legível e menos acoplado.

*/


