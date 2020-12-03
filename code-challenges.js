// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//function will take in a number
const fibSeq = (number) => {
  //declaring an array of 1, 1
  var fibArray = [1,1]
  //start a loop at 1 and stops before our numbers - 1 (to simulate starting at 0) and iterates one time every time.
  for (let i = 1; i< number - 1; i++){
    fibArray.push(fibArray[i] + fibArray[i-1])
}
return fibArray
}
console.log(fibSeq(10));
/*
const fibonacciSequence = (num1, num2) => {
  let array =[0,1]
  for(let i=0; i<10; i++)

var fib = [0,1]
for(var i=fib.length; i<=10; i++)

}
*/

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// I need a function that takes in an array and filters the array by the type of value exactly equal to a value of number and exactly equal to a value of a anything that isn't even
const onlyOdds = (array) =>{
  let filteredArray = array.filter(value => typeof value === "number" && value % 2 !==0)
  //I have to sort my filteredArray from least to greatest
    return filteredArray.sort((a,b) => a-b)
}
console.log(onlyOdds(fullArr1));
console.log(onlyOdds(fullArr2));


/*
if(filteredArray % 2 !== 1)
  return filteredArray.sort(function(a,b){return a-}) */

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//takes in a string
//create a function that takes a string as an argument
const middleLettersOnly = (string) => {
  //make a variable that holds the string argument into an array
  let stringArray = string.split("")
  //variable that knows the middle
  let mid = stringArray[Math.floor(stringArray.length /2)]
// if a string has an even number of characters
if (stringArray.length % 2 === 0) {
  //create a variable that holds the index of the first of the middle two numbers
  let theTwoMiddle = stringArray.length / 2 - 1
  //concatenate the first and second middle letters
  return stringArray[theTwoMiddle] + mid
}else {
  //return back the middle letter of the word
  return mid
}
}
console.log(middleLettersOnly(middleLetters1));
console.log(middleLettersOnly(middleLetters2));



// --------------------4) READ CAREFULLY: Create a CLASS to get the area of a sphere. Create THREE spheres with different radi as test cases. Area of a sphere =  4πr^2 (four * pi * radi squared)

//So i need a class that takes in a constructor argument of radius since that is the variable that will be changing from sphere to sphere
class SphereArea{
  constructor(radius){
    this.radius = radius
  }
  //I now have to have my operation to find the area of a sphere and be able to plug in the new radii from the new spheres and I also wanted to add a bit more numbers to pi since I dont want to use Math.PI
  areaCal(){
    return (4 * 3.14159 * (this.radius * this.radius))
  }
}
//now I need to build the spheres that plug in their radii
const newSphere1 = new SphereArea(2)
const newSphere2 = new SphereArea(3)
const newSphere3 = new SphereArea(4)
console.log(newSphere1.areaCal());
// value = 50.26544
console.log(newSphere2.areaCal());
// value = 113.09724
console.log(newSphere3.areaCal());
// value = 201.06176

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// build a function that takes an array of numbers as an argument
const arrayArgument = (array) => {
  //create a variable to hold the result of the addition
  let result = 0
  //map through the array and add the value to result until the map stops
  let mappedArray = array.map(value => {
  return result = result + value
})
//return the array of the accumilated sum
return mappedArray
}
console.log(arrayArgument(numbersToAdd1));
console.log(arrayArgument(numbersToAdd2));
console.log(arrayArgument(numbersToAdd3));
