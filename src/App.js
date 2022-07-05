import './App.css'
import React, { useState } from 'react'
import morseDecoder from './morse_object'

// create morse by space ckicking
function App() {
  let [morse, setMorse] = useState('')
  let [decodedText, setDecodeText] = useState('Here will be result')
  let start = 0
  const eventStart = (e) => !start && e.keyCode === 32 ? start = (new Date()).getTime() : setMorse(morse)
  const eventEnd = (e) => {
    let keyDownDuration = e.keyCode === 32 && (new Date()).getTime() - start
    keyDownDuration && keyDownDuration < 1000 ? (keyDownDuration <= 100 ? setMorse(morse += '.') : setMorse(morse += '-')) : setMorse(morse += ' ')
    start = 0
  }

//decode button
const decodeMorse = () => {
  setDecodeText(morse.split(' ').map(w => morseDecoder[w]).join(''))
  setMorse(morse = '')
}

// clear input label button
const onClickCleaning = () => {
  setMorse(morse = '')
  setDecodeText('Here will be result')
}



return (
  <div className="App">
    <input onKeyUp={eventEnd} onKeyDown={eventStart} type="text" value={morse} readOnly ></input>
    <input onClick={decodeMorse} type="button" value="Decode"/>
    <input onClick={onClickCleaning} type="button" value="Clean"/>
    <div><span className='span'>{decodedText}</span></div>
    <div>
      <p>SHORT PUSH TO SPACE - dot (.) (less then 100ms)</p>
      <p>LONGER PUSH TO SPACE - dash (-) (from 100ms to 1000 ms)</p>
      <p>THE LONGEST PUSH TO SPACE - Space between letters (more then 1000 ms)</p>
      <p>SIX TIME DOT (......) - Space between words</p>
    </div>
  </div>
);
}

export default App;
