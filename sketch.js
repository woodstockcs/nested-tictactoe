/* eslint-disable no-undef */


let buff = 10
let levels = 6

function setup() {
  createCanvas(600, 600)
  background(220)
  noLoop()
}

function draw() {
  drawGrid(0, 0, 0)
  drawGrid(0, 1, 1)
  drawGrid(2, 3, 2)
  drawGrid(7, 9, 3)
  drawGrid(21, 28, 4)
}

function drawGrid(x, y, level) {
  let size
  if (level == 0) {
    size = width
  } else {
    size = width/(3**level)
  }
  push()
  console.log(size)
  translate(x*size, y*size)
  strokeWeight(1)
  //strokeWeight(levels-(level*2))
  // vertical lines
  line(size/3, 0, size/3, size)
  line(size*2/3, 0, size*2/3, size)
  // horizontal lines
  line(0, size/3, size, size/3)
  line(0, size*2/3, size, size*2/3)  
  pop()
}

function drawX(x, y, size, weight, c) {
  push()
  stroke(color(c))
  strokeWeight(weight)
  translate(x, y)
  line(buff, buff, size-buff, size-buff)
  line(size-buff, buff, buff, size-buff)
  pop()
}

function drawO(x, y, size, weight, c) {
  push()
  stroke(color(c))
  strokeWeight(weight)
  noFill()
  translate(x, y)
  circle(size/2, size/2, size - 2*buff)
  pop()
}
