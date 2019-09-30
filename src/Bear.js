export class Bear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  wasPlayerEaten() {
    if (this.foodLevel > 0) {
      return false;
    }
    else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
}
