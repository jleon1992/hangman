import React, {useState, useEffect} from 'react';
import GuessedLetterBox from './components/GuessedLetterBox'
import './App.css';
import axios from 'axios'
import {WordBox} from './components/WordBox'
import {GuessCount} from './components/GuessCount'
import {HangMan} from './components/HangMan'

var count = 0

function App() {
  const [word, setWord] = useState('')
  const [incorrectLetters, setIncorrectLetters] = useState([])
  const [guessCount , setGuestCount ] = useState(10)
  const [disabled, setDisabled] = useState(false)
  const [value, setValue] = useState('')
  const [wordLength, setWordLength] = useState(0)
  const [correctLetters, setCorrectLetters] = useState([])
  const [header, setHeader] = useState('HANGMAN')
  
  
  useEffect(() => {
    axios.get('https://random-word-api.herokuapp.com/word?number=1')
    .then(res => {
      const wordArray = res.data
      setWord(wordArray[0])

      
    })

  },[])

  function createWordLength(arr){
    setWordLength(arr.length)

  }

  // TURN WORD INTO ARRAY OF LETTERS
  const letterArray = word.split('')

  
  
  

  // CHANGE HANDLER
  const changeHandler = e => {

    const alphabet = /[a-zA-Z]/
    if(e.target.value.match(alphabet)){
      // only include letters

      letterArray.map((letter, index) => {
        // setWordLength(letterArray.length)
        const alreadyThere = correctLetters.indexOf(e.target.value)
        
        if(letter === e.target.value){
          if (alreadyThere === -1){
          // alert('hey')
          count = count+1
          console.log(wordLength)
          if(count === wordLength){
            setDisabled(true)
            setHeader('SUCCESS')
            document.getElementById(header).style.color = 'green'
            document.querySelector('.invisible').classList.remove('invisible')
          }
          }
         
          
          document.getElementById(index).classList.remove('invisible')
         
        //  console.log(count)
         setCorrectLetters([
           ...correctLetters,
           e.target.value
         ])
          
          
        }

          const already = incorrectLetters.indexOf(e.target.value)
          const isLetters = letterArray.indexOf(e.target.value)
          if(guessCount === 1){
            document.querySelector('input').style.color = 'red'
            setDisabled(!disabled)
            setValue('GAME OVER')
            setGuestCount(0)
            const inivisbleLetters = document.querySelectorAll('.invisible')
            inivisbleLetters.forEach(inivisbleLetter => {
              inivisbleLetter.classList.remove('invisible')
            });
            // console.log(inivisbleLetters)
          }else{
            if(already === -1 && letter !== e.target.value && isLetters === -1){
              // console.log(e.target.value)
              setIncorrectLetters([
                ...incorrectLetters,
                e.target.value
              ])
              setGuestCount(guessCount -1)
              // console.log('guesscount', guessCount)
            }
          }
         
          
          
        
      })
    }
    
  }
  useEffect(()=>{

    setWordLength(word.length)
  })
  return (
    <div className="App">
      <div className='animation'>
         <h1 id={header}>{header}</h1>
         <button id='replay' className='invisible' onClick={(()=>{window.location.reload(false)})} >PLAY AGAIN?</button>
      </div>
      
      <WordBox word={word} letterArray={letterArray} changeHandler={changeHandler} disabled={disabled} value={value} />
      <div className='count'>
        <GuessedLetterBox letters={incorrectLetters} />
        <HangMan guessCount={guessCount}  />
        <GuessCount count={guessCount} />
      </div>
      
    </div>
  );
}

export default App;
