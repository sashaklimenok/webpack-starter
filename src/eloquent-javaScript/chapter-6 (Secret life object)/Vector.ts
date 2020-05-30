interface IVector {
  x: number;
  y: number;
  plus: (vector: IVector) => IVector;
  minus: (vector: IVector) => IVector;
}

export class Vector implements IVector {

  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  public plus(vector: IVector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  public minus(vector: IVector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

}
