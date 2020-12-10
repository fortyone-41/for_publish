import React, { useState } from 'react'
import PropTypes from 'prop-types'

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function useInputValues(defaultValue = '') {
    const [values, setValues] = useState(defaultValue)

    return {
        bind: {
            values,
            onChange: event => setValues(event.target.values)
        },
        values: () => values
    }
}


function Game({ onClicker }) {
    const input = useInputValues('')

    function clickHandler(event) {
        event.preventDefault()

        if (input.values().trim()) {
            onClicker(input.values())
        }
    }
    return (
        <div >
            <div className='square' style={{ width: '500px', height: '500px' }}>
                <p style={{ paddingTop: getRandomArbitrary(0, 500) + 'px', paddingLeft: getRandomArbitrary(0, 500) + 'px' }}>
                    <form style={{ marginBottom: '1rem' }} onSubmit={clickHandler} >
                        <input {...input.bind} value='click' hidden/>
                        <button type='submit'>&times;</button>
                    </form>
                </p>
            </div>
        </div >
    )
}

Game.propTypes = {
    onClicker: PropTypes.func.isRequired
}

export default Game