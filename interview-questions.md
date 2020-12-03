# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: Object destructuring is the ability to take values that are inside objects that you want to be able to manipulate. So if you wanted to use information that is deep inside an object, you would destructure it in a way that you are able to use the values with whatever you are trying to manipulate them with, like a variable.

  Researched answer: Destructuring is a feature that came along with ES6 where you can use a destructuring expression to "unpack" values from arrays, or properties in objects and make them able to assign to variables.



2. What are React lifecycle methods? Provide three examples.

  Your answer: React lifecycle methods are methods that React uses to operate and behave how we may want them to. So, they have starting and ending cycles known as lifecycles from the birth to the death of that particular method, and they all play a roll in whether or not they are mounting, updating, or unmounting. The most common method would be render() since it is the only required method to have a class component exist in React. Another would be the constructor() method in which it declares variables that hold state.

  Researched answer: React lifecycle methods are components which you are able to view and change during the three stages (mounting, updating, and unmounting). In essence, it is the ability to follow and manipulate a method from the birth to the death of a component. Sort of like when you follow a function with a return, the return completely ends that specific function. render() is the most used and the only required lifecycle method within a class component in React, a constructor() method would be another in which you can declare pure data (things not necessarily updating but have abilities to such as state) for your script, or componentWillUnmount(), the function used as it is suggested in the name to unmount and destroy the component (death)



3. What is the difference between a class and an object?

  Your answer: Classes are rules that we can use to manipulate objects, and objects are sort of like instant pieces of data we can use to portray properties that are desired.

  Researched answer: Classes are the definition of an object's properties, in any form. An object is an instance of a class, so only one desired outcome.



4. What is the difference between a HTML div and a span?

  Your answer: a HTML div in react are blocks of code to be formed into an element, and a span would be an element within an element to display a determined outcome.

  Researched answer: The difference between a HTML div and a span is that an HTML div should be a wrap on entire sections of something, vs a span would be used as an in-line element on things like texts, pictures, and other "bigger" elements.



5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer: React.Fragments allow for the creation of multiple elements, so instead of delcaring each and every element individually, you can just wrap them all inside a <React.Fragment>

  Researched answer: You would want to use a <React.Fragment> in cases where you have a component returning multiple elements. So instead of adding them all individually, you can wrap them all together in between the carrots <>



6. What does it mean to create a responsive web application? What are three options for creating responsive design?

  Your answer: To have a responsive web application is to be able to use the app on a multitude of screens and interacting with the app is seamlessly the same throughout what ever device I use. You can use CSS, HTML, Javascript languages to create an environment where the specific parameters and technology being used are responding to your website the way you want them to.

  Researched answer: Being able to create a web application that is seamlessly accessible from any device a user uses. You are able to use CSS, HTML and even javascript to perform properly and effectively in order to create that seamless envirnment.



7. What are props in React?

  Your answer: Props are named such because they are properties that are being passed to one component to another (so from a parent component to a child component).

  Researched answer: Props are properties that are transferred from a parent component to a child component. They are Read-Only, which means it does exactly what it is declaring with no updating or changing, and that more or less means they cannot be modified at all.



8. What is `this` in JavaScript?

  Your answer: so the this key is a word used to declare what it belongs to. So, with this.car = red, this.horn = loud this.color = black . The 'this.' defines a key to its global spectrum.

  Researched answer: so "this." is a value in a global context. so this is in reference to an object that is trying to hold state. So iff you are referring to 'this' in a child class, you are basically trying to derive the initial definition of what ever that 'this' is assigned to.



9. STRETCH: What is a ternary operator in JavaScript?

  Your answer:

  Researched answer:



10. STRETCH: What is an anonymous function in JavaScript?

  Your answer:

  Researched answer:



## Looking Ahead: Terms for Next Week
- Ruby- is a general-purpose programming language which has many applications, but it heavily known for web applications.
- Object oriented programming- based on the concept of "objects" which can contain data and code, in which the data is held in fields and code are forms of procedures.
- RSpec- a tool used by ruby to be used as a testing tool
- Instance variable- a variable declared in a class but outside of constructors, methods, or blocks
- Ruby blocks- so a block, could be seen as a method like in javascript, but it doesnt have a name or even associated to an object. its like an anonymous piece of code
- Ruby hashes- a collection of key-value pairs
- `getter` and `setter` methods in Ruby- these allow us to access a class's instance variable from outside of the class getter GETS the instance variable while setter SETS the instance variable
