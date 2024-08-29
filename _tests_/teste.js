const { adicionar, subtrair, multiplicar, dividir } = require('./src/funcoes');

console.log(adicionar(5, 3)); 
console.log(subtrair(5, 3));  
console.log(multiplicar(5, 3)); 

try {
  console.log(dividir(5, 0));
} catch (error) {
  console.error(error.message); 
}
