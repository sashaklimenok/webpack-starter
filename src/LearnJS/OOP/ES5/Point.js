function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.square = function () {
    const {x, y} = this;
    return Math.sqrt( x * x + y * y );
}

const point = new Point(10, 10);

console.log(point.square());

