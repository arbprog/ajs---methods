export default class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('Имя персонажа должно быть строкой');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя меньше 2 или больше 10 симоволов');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = 1;
    this.defence = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Персонаж мертв');
    }
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
