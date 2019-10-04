export class Bear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.interval = 1000;
  }

  setDifficulty(diff) {
    if (diff === "easy") {
      this.interval = 5000;
    }
    else if (diff === "normal") {
      this.interval = 2000;
    }
    else if (diff === "hard") {
      this.interval = 1000;
    }
    else {
      this.interval = 1000;
    }
    return this.interval;
  }

  setHunger(interval) {
    setInterval(() => {
      this.foodLevel--;
    }, interval);
  }

  wasPlayerEaten() {
    if (this.foodLevel > 0) {
      return false;
    }
    else {
      return true;
    }
  }

  feed(amount) {
    this.foodLevel = amount;
  }

}
