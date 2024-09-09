//Testado no Node.JS

// 1 -

const readlineSync = require("readline-sync");

let numeroInformado = parseInt(readlineSync.question("Insira um numero: "));

function sequenciaFibonacci(numeros) {
    let sequencia = [0,1];

    for (let i = 2; i < numeros; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }
    return sequencia;
}

const resultado = sequenciaFibonacci(numeroInformado);

if (resultado.includes(numeroInformado)) {
    console.log("O número pertence a sequência");
} else {
    console.log("O número não pertence a sequência");  
}

// 2 -

const readlineSync = require("readline-sync");

let palavra = readlineSync.question("Insira uma palavra: ");
let letra = "a";
let quantidadeDeLetras = 0;

if (palavra.includes(letra)) {
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            quantidadeDeLetras++
        }
    }

    console.log(`A letra ${letra} se repete ${quantidadeDeLetras} vezes`);
} else {
    console.log(`A palavra não tem a letra "${letra}"`);
    
}

// 3 -

const indice = 12;
let soma = 0;
let k = 1;

while (k < indice) {
    soma = soma + k;
    k++;
}

console.log(soma);

// resultado = 66

// 4 -

// a = 9
// b = 128
// c = 49
// d = 100
// e = 13
// f = não consegui identificar nenhum padrão

// 5 -

// acenderia um interruptor qualquer, caso eu fosse na sala e a luz estivesse apagada,
// saberia que não é esse interruptor, tendo agora 50% de chance.
// acenderia um segundo interruptor, caso eu fosse na sala e a luz permanecesse apagada,
// saberia que a minha terceira opção é a que a sende a luz, mesmo não indo até a sala.




