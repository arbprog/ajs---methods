import Zombie from '../zombie';

test('Zombie', () => {
  const char = new Zombie('Zombie');
  expect(char).toBeDefined();
  expect(char.type).toEqual('Zombie');
  expect(char.attack).toEqual(40);
  expect(char.defence).toEqual(10);
});
