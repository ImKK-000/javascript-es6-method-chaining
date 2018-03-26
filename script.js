const Shape = class {
  constructor(id) {
    this.id = id;
  }

  printId = () => {
    console.log(this.id);
    return this;
  };
};

const Circle = class extends Shape {
  constructor({ id, radius }) {
    super(id);
    this.radius = radius;
  }

  printRadius = () => {
    console.log(this.radius);
    return this;
  };
};

const Rectangle = class extends Shape {
  constructor({ id, width, height }) {
    super(id);
    this.width = width;
    this.height = height;
  }

  printWidth = () => {
    console.log(this.width);
    return this;
  };

  printHeight = () => {
    console.log(this.height);
    return this;
  };
};

const INITIAL_CIRCLE_DATA = {
  id: '1234567890ABCDEF',
  radius: 10
};
const INITIAL_RECTANGLE_DATA = {
  id: 'FEDCBA0987654321',
  width: 150,
  height: 300
};

new Circle(INITIAL_CIRCLE_DATA)
  .printId()
  .printRadius();

new Rectangle(INITIAL_RECTANGLE_DATA)
  .printId()
  .printWidth()
  .printHeight();
