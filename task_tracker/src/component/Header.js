import React from 'react'
import Button from './Button'

const Header = () => {
    const onClick = () => {

    }
    
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color='black' text='Add' onClick={onClick} />     
        </header>
    )
}

export default Header
