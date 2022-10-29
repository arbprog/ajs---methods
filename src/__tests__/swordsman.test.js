import Swordsman from '../swordsman';

test('Swordsman', () => {
  const char = new Swordsman('Swordsman');
  expect(char).toBeDefined();
  expect(char.type).toEqual('Swordsman');
  expect(char.attack).toEqual(40);
  expect(char.defence).toEqual(10);
});
