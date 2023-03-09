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