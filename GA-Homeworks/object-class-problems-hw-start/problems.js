/*
Create an object that defines a laptop. It should have the following properties:

make (string)
model (string)
ram (number)
storage (number)
*/

const laptop = {
  make: "Apple",
  model: "MacBook Pro",
  ram: 32,
  storage: 128,
}


/*
Create an object that defines a bottle of wine. It should have the following properties:

name (string)
grape (string, eg: Merlot)
vintage (number, eg: 2017)
volume (number, eg: 750)
amountRemaining (number, eg: 750)

It should have the following methods:

drink(amount) - removes the `amount` from the `amountRemaining`
refill(amount) - adds the `amount` to the amountRemaining

*/

const wineBottle = {
  name: "Marlborough",
  grape: "Chardonnay",
  vintage: 2009,
  volume: 750,
  amountRemaining: 300,

  drink(amount) {
    this.amountRemaining - amount
  },

  refill(amount) {
    this.amountRemaining + amount
  }

}

/*
write a Product class that has the following properties:

name (string)
description (string)
price (number)
*/

class Product {
  constructor(name, description, price) {

    this.name = name
    this.description = description
    this.price = price
  }
}

/*
Write a Cart class that has the following properties:

contents (array)

and the following methods:

addItem(item) - adds the given item into the contents array
removeItem(item) - removes the given item from the contents array
empty() - removes all items from the contents array
getTotal() - returns the total price of all items in the contents array
*/

class Cart {
  constructor(contents) {
this.contents = [] 
  }
  

  // NOT SURE WHY THIS WON"T WORK? 
  addItem(item) {
const contents = contents.push(item);
  }
  
  // Need to finish this 
  removeItem(item) {

  }

  empty() { 
  contents = []
  }

getTotal() {
(contents.length)+1
 }

}

/*
Write a Shape class that has the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the shape
getPerimeter() - calculates the total length of all sides of the shape
*/

// Need to finish 
class Shape {
  constructor(width, height,) {

    this.width = width
    this.height= height
   
  }
}
getArea ()
getPerimeter () 
}



// ! please do not alter below ✋

module.exports = {
  laptop,
  wineBottle,
  Product,
  Cart,
  Shape
}
