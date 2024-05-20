// array methods
// map(), filter(), reduce(), find(), includes()

const myArray = [1, 2, 3, 4]

myArray.map((el) => el + 1)
console.log(myArray) // [2, 3, 4, 5]

myArray.map(() => 'b')
console.log(myArray) //['b', 'b', 'b', 'b']
