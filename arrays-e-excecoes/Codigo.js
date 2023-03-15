const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function verificarTipo(input) {
    return !isNaN(input);
  }
  
  readLine.question("Qual o ano do seu nascimento: ", (data) => {
    if (verificarTipo(data) && data < 2005) {
      console.log("Voce é maior de idade");
      readLine.question("Voce tem habilitação? ", (habilitacao) => {
        if (habilitacao.toUpperCase() === "SIM") {
          console.log("Você pode entrar no kart");
        } else {
          console.log("Voce nao pode entrar no Kart");
        }
      });
    } else {
      console.log("Voce é menor de idade.");
    }
  });