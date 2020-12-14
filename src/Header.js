import React from 'react'
import './Header.css'


const Header = () => {
    return (

            <ul className='menu'>
                <li><a href='addTodo("game")'>Home</a></li>
                <li><a>Game</a></li>
                <li><a>Reload</a></li>
        </ul>
    )
}

export default Header