import React, { useState } from 'react'
import PropTypes from 'prop-types'

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function Game(props) {
    function setPosition() {
        const position = {paddingTop: +  getRandomArbitrary(0, 500) + "px", paddingLeft: + getRandomArbitrary(0, 500) + "px"};
        return position;
    }
    let pos=setPosition();
    return (
            <div className='square' style={{ width: '500px', height: '500px' }}>
                <input value={props.gamer.length} /><label></label>
                    <p  style={pos}><button onClick={pos=setPosition , props.onClicker}>&times;</button></p>
            </div>
    )
}

Game.propTypes = {
    onClicker: PropTypes.func.isRequired
}

export default Game