const questoes = require('./questoesV2');

describe('Teste para função maior número', () =>{

test('Testar a função maior número', () => {
  expect(questoes.ehMaior(2, 3, 1)).toBe(3);
});


 test('Testar a função calcular idade', () => {
   expect(questoes.calcularIdade(2000)).toBe('Você é adulto');
 })
});

 test('Testar a função Verificar Dia', () => {
  expect(questoes.verificarDia('domingo')).toBe('Pode descansar');
});

test('Testar a função Dia e Noite', () => {
  expect(questoes.diaNoite('6')).toBe('É Dia');
});
