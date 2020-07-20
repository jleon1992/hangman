import React from 'react'

export const LetterBoxes = props => {
    const {letter} = props
    const showLetter = letter.toUpperCase()
    return (
        <div className='box'>
            <h1 className='invisible' id={props.id}>{showLetter}</h1>
        </div>
    )
}
export default LetterBoxes