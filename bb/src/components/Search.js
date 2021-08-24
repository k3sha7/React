import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        console.log(text)
        getQuery(q)
    }

    return (
        <section>
            <form>
                <input 
                type='text' 
                className='form-control' 
                placeHolder='Search'
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus/>
            </form>
        </section>
    )
}

export default Search
