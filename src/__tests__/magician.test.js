import Magician from '../magician';

test('Magician', () => {
  const char = new Magician('Magician');
  expect(char).toBeDefined();
  expect(char.type).toEqual('Magician');
  expect(char.attack).toEqual(10);
  expect(char.defence).toEqual(40);
});
