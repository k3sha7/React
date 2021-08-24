import React from 'react'
import CharItem from './CharItem'

const cards = ({items, isLoading}) => {
    return isLoading ? <h1>....Loading</h1> : <section className="cards">
        {items.map(item => 
            <CharItem key={item.char_id} item={item} />)}
    </section>
}

export default cards
