import './App.css'
import React, { useState } from 'react'
import morseDecoder from './morse_object'

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
const decodeMorse = () => {
  setDecodeText(morse.split(' ').map(w => morseDecoder[w]).join(''))
  setMorse(morse = '')
}
const onClickCleaning = () => {
  setMorse(morse = '')
  setDecodeText('Here will be result')
}



return (
  <div className="App">
    <input onKeyUp={eventEnd} onKeyDown={eventStart} type="text" value={morse} readOnly ></input>
    <input onClick={decodeMorse} type="button" value="Decode"/>
    <input onClick={onClickCleaning} type="button" value="Clean"/>
    <div><span>{decodedText}</span></div>
  </div>
);
}

export default App;
