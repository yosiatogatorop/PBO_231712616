class Shape {
    calculateArea() {
      throw new Error("Method 'calculateArea' must be implemented");
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    calculateArea() {
      return this.side * this.side;
    }
  }
  
  function printArea(shape) {
    console.log(shape.calculateArea());
  }
  
  const rectangle = new Rectangle(5, 10);
  const square = new Square(5);
  
  printArea(rectangle);
  printArea(square);
  