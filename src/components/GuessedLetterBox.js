import React from 'react'

export const GuessedLetters = (props) => {
    const {letters} = props
    return (
        <div>
            <h2>Incorrect letters</h2>
            <div className='guessedLetters'>
                {letters.map(letter=>{
                    const showLetter = letter.toUpperCase()
                    return(
                        <h4>{showLetter}</h4>
                    )
                    
                })}
            </div>
            
        </div>
    )
}

export default GuessedLetters