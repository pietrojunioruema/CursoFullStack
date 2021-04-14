let exemplo_1 = 22.5565465;
let numero_1 = 10;
exemplo_1 = exemplo_1.toString();
console.log(exemplo_1+numero_1 + " o primeiro número virou string, e a soma foi concatenada.");


exemplo_1 = '22.555';
numero_1 = 10;
exemplo_1 = parseFloat(exemplo_1);
console.log(exemplo_1+numero_1+" o primeiro número virou float, e foi efetuado a soma com o número.")

exemplo_1 = 22.555;
numero_1 = 10;
exemplo_1 = parseInt(exemplo_1);
console.log(exemplo_1+numero_1+ " o primeiro número virou int, e foi efetuado a soma com o número.");

exemplo_1 = 22.555;
numero_1 = 10;
exemplo_1 = exemplo_1.toFixed(1);
console.log(exemplo_1 + " O primeiro número com uma casa decimal.");
