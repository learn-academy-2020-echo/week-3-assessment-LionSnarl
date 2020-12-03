// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge

// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) we are importing a child class component from a folder held locally to be rendered on the webpage
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  // 2) Creates the abiltiy to call props in child components to use the current values of this.state, it grants the ability to use the values of this.state for every perticular instance.
  constructor(props){
    super(props)
    // 3) Initializing the state values for multiple keys
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 4)destructures this.state.rollImages & this.state.diceLog in order to manipulate the values for those keys
    let { rollImages, diceLog } = this.state
    // 5) Declaring a variable named randomNum to equal the rounded up number of the length of rollImages
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    let newRoll = rollImages[randomNum]
    // 6) Manipulating state indirectly by creating new values for key pairs. So here we are adding a newRoll for currentPic and diceLog.
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  // 7) The purpose of the render() function is to display the specified HTML code inside the specified HTML element.
  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        // 8) calling a class component called Dice to be rendered on the webpage
        <Dice
          // 9) Calling for the instance of this.handleRoll function to be displayed on the webpage
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

// 10) exporting all the data on this file Board to return to React in order to be updated as a component
export default Board
