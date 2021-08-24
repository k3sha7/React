import React from 'react';


const Currency = (props) => {
    const {options, selectedC, onChangeC, amount, onChangeAmount} = props
    return (
        <div>
            <input type='number' value={amount} onChange={onChangeAmount}/>
            <select value={selectedC} onChange={onChangeC} >
                {options.map(opt => {
                     return <option key={opt} value={opt}>{opt}</option>
                })}
            </select>
        </div>
    );
}

export default Currency;
