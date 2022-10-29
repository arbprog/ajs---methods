import Character from '../character';

test('Новый персонаж', () => {
  const char = new Character('Имя');
  expect(char).toBeDefined();
  expect(char.health).toEqual(100);
  expect(char.level).toEqual(1);
});

test.each([Number()])(
  'Если имя персонажа не строка',
  (num) => {
    const textErr = 'Имя персонажа должно быть строкой';
    expect(() => new Character(num)).toThrowError(new Error(textErr));
  },
);

test.each([String()])(
  'Если имя персонажа меньше 2 или больше 10 символов',
  (str) => {
    const textErr = 'Имя меньше 2 или больше 10 симоволов';
    expect(() => new Character(str)).toThrowError(new Error(textErr));
  },
);

test('Alex с 50 хелзпоинтами', () => {
  const char = new Character('Alex');
  char.health = 50;
  char.levelUp();
  expect(char.health).toEqual(100);
  expect(char.level).toEqual(2);
  expect(char.attack).toBeCloseTo(1.2);
  expect(char.defence).toBeCloseTo(1.2);
});

test('Мертвый John', () => {
  const char = new Character('John');
  char.health = 0;
  char.levelUp();
  expect(char.levelUp).toThrow(Error);
});

test('Нанесение урона по Bob', () => {
  const char = new Character('Bob');
  char.damage(10);
  expect(char.health).toBeCloseTo(90.1);
});

test('Нанесение урона по мертвому Jim', () => {
  const char = new Character('Jim');
  char.health = (-1);
  char.damage(10);
  expect(char.health).toEqual(-1);
});
