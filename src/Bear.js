export class Bear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setDifficulty(diff) {
    let interval = 1000;
    if (diff === "easy") {
      interval = 5000;
    }
    else if (diff === "normal") {
      interval = 2000;
    }
    else if (diff === "hard") {
      interval = 1000;
    }
    else {
      interval = 1000;
    }
    return interval;
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

  feed() {
    this.foodLevel = 10;
  }

}
