class Shape {
  constructor(name) {
    this.name = name;
  }
  area() {
    return area;
  }

  perimeter() {
    return perimeter;
  }

  toString() {
    return `${this.name}: area = ${this.area()}, perimeter = ${this.perimeter()}`;
  }
}

export class Rectangle extends Shape {
  constructor(length, width) {
    super('Rectangle');
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }
}

export class Square extends Shape {
  constructor(side) {
    super('Square');
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return 4 * this.side;
  }
}

export class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}
