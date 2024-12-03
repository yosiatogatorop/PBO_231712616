class Shape {
    calculateArea_2616() {
      throw new Error("Method 'calculateArea_2616' must be implemented");
    }
  
    hitungKeliling_2616() {
      throw new Error("Method 'hitungKeliling_2616' must be implemented");
    }
  }
  
  class Rectangle_2616 extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea_2616() {
      return this.width * this.height;
    }
  
    hitungKeliling_2616() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Square_2616 extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    calculateArea_2616() {
      return this.side * this.side;
    }
  
    hitungKeliling_2616() {
      return 4 * this.side;
    }
  }
  
  class Circle_2616 extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea_2616() {
      return Math.PI * this.radius * this.radius;
    }
  
    hitungKeliling_2616() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  function printArea(shape) {
    console.log(shape.calculateArea_2616());
    console.log(shape.hitungKeliling_2616());
  }
  
  const rectangle = new Rectangle_2616(5, 10);
  const square = new Square_2616(5);
  const circle = new Circle_2616(7);
  
  printArea(rectangle);
  printArea(square);
  printArea(circle);
  