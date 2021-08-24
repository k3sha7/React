import React, { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = e => {
        e.preventDefault()
        if(!text){
            alert('Add text')
            return
        }
        
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <lable>Task</lable>
                <input type='text' placeholder='Task' value={text} onChange={e => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <lable>Day & Time</lable>
                <input type='text' placeholder='Task' value={day} onChange={e => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <lable>Set reminder</lable>
                <input type='checkbox' checked={reminder} placeholder='Task' value={reminder} onChange={e => setReminder(e.currentTarget.checked)}/>
            </div>
            <input className='btn btn-block' type='submit' placeholder='Save' value='save task' />
            
        </form>
    )
}

export default AddTask
