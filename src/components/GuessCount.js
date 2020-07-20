import React from 'react'

export const GuessCount = props => {
    return (
        <div className='guessCount'>
            <h2>Guesses Remaining</h2>
            <h2>{props.count}</h2>
        </div>
    )
}

export default GuessCount