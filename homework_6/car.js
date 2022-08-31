class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  set brand(name) {
    const isValidName = typeof name === 'string' && name.length > 0 && name.length <= 50;

    if (!isValidName) {
      throw new Error('Невалидное название бренда');
    }

    this.#brand = name;
  }

  get brand() {
    return this.#brand;
  }

  set model(name) {
    const isValidName = typeof name === 'string' && name.length > 0 && name.length <= 50;

    if (!isValidName) {
      throw new Error('Невалидное название модели');
    }

    this.#model = name;
  }

  get model() {
    return this.#model;
  }

  set yearOfManufacturing(year) {
    const presentYear = new Date().getFullYear();
    const isValidYear = typeof year === 'number' && year >= 1900 && year <= presentYear;

    if (!isValidYear) {
      throw new Error('Невалидный год выпуска');
    }

    this.#yearOfManufacturing = year;
  }

  get yearOfManufacturing() {
    return `Год: ${this.#yearOfManufacturing}`;
  }

  set maxSpeed(speed) {
    const isValidSpeed = typeof speed === 'number' && speed >= 100 && speed <= 300;

    if (!isValidSpeed) {
      throw new Error('Невалидная максимальная скорость');
    }

    this.#maxSpeed = speed;
  }

  get maxSpeed() {
    return `${this.#maxSpeed} км/ч`;
  }

  set maxFuelVolume(fuel) {
    const isValidFuelNumber = typeof fuel === 'number' && fuel >= 5 && fuel <= 20;

    if (!isValidFuelNumber) {
      throw new Error('Превышен максимальный объём топлива');
    }

    this.#maxFuelVolume = fuel;
  }

  get maxFuelVolume() {
    return `${this.#maxFuelVolume} л`;
  }

  set fuelConsumption(value) {
    if (typeof value !== 'number') {
      throw new Error('Невалидное значение расхода топлива');
    }

    this.#fuelConsumption = value;
  }

  get fuelConsumption() {
    return `${this.#fuelConsumption} л/100 км`;
  }

  get currentFuelVolume() {
    return `${this.#currentFuelVolume} л`;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    const roundedMileage = Math.round(this.#mileage);

    return `${roundedMileage} км`;
  }

  start() {
    const isCarExist = this.#brand && this.#model && this.#yearOfManufacturing;
    const isFuelEnough = this.#currentFuelVolume !== 0 && this.#currentFuelVolume !== undefined;

    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    } else if (!isCarExist) {
      throw new Error('Машины не существует');
    } else if (!isFuelEnough) {
      throw new Error('Топливный бак пуст');
    }

    this.#isStarted = true;

    return this.#isStarted;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }

    this.#isStarted = false;

    return this.#isStarted;
  }

  fillUpGasTank(fuel) {
    const isValidFuelValue = typeof fuel === 'number' && !isNaN(fuel) && isFinite(fuel) && fuel > 0;

    if (!isValidFuelValue) {
      throw new Error('Неверное количество топлива для заправки');
    } else if (!this.#maxFuelVolume) {
      throw new Error('Не указано максимальное количество топлива');
    } else if (fuel + this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    } else {
      this.#currentFuelVolume += fuel;

      return this.#maxFuelVolume;
    }
  }

  drive(speed, hours) {
    const isValidSpeed = typeof speed === 'number' && !isNaN(speed) && isFinite(speed) && speed > 0;
    const isValidHours = typeof hours === 'number' && !isNaN(hours) && isFinite(hours) && hours > 0;
    const currentDistance = speed * hours;
    const distanceForOneLitre = 100 / this.#fuelConsumption;
    const distanceForCurrentFuel = distanceForOneLitre * this.#currentFuelVolume;

    if (!isValidSpeed) {
      throw new Error('Неверная скорость');
    } else if (!isValidHours) {
      throw new Error('Неверное количество часов');
    } else if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    } else if (!this.#maxSpeed) {
      throw new Error('Максимальная скорость не определена');
    } else if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    } else if (!this.#fuelConsumption) {
      throw new Error('Расход топлива не определён');
    } else if (currentDistance > distanceForCurrentFuel) {
      throw new Error('Недостаточно топлива');
    } else {
      this.#mileage = distanceForCurrentFuel;

      return this.#mileage;
    }
  }
}

module.exports = { Car };