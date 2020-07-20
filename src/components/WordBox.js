import React from 'react'
import LetterBoxes from './LetterBoxes'

export const WordBox = props => {
    const {changeHandler, letterArray, disabled, value} = props
    
    return (
        <div >
            <div className='wordBox'>
                {letterArray.map((letter, index) => {
                    // console.log(letter, index)
                    
                    return(
                        <LetterBoxes letter={letter} key={index} id={index} />
                    )
                })}
                
            </div>
            <div className='input'>
                <form>
                <label >
                    <h3>Type Here to Start: </h3> 
                    <input
                    disabled={disabled}
                    type='text'
                    name='letter'
                    onChange={changeHandler}
                    value={value}
                    />
                </label>
                
                </form>
                {/* <button className='invisible' onClick={() => {window.location.reload(false)}}>Try Again?</button> */}
            </div>
           
            
          
        </div>
    )
}

export default WordBox
