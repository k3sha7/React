import React, {useEffect, useState} from 'react'
import Currency from './Currency'
import './App.css';


function App() {

  const URL ='https://api.exchangeratesapi.io/latest'
  const [options, setOptions] = useState([])
  const [from,setFrom] = useState()
  const [to,setTO] = useState()
  const [amount, setAmount] = useState(1)
  const [amountFrom, setAmountFrom] = useState(true)
  const [exchangeRate, setExchangeRate] = useState()

  let toAmount, fromAmount
  if(amountFrom) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    fromAmount = amount / exchangeRate
    toAmount = amount
  }

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setOptions([data.base, ...Object.keys(data.rates)])
        const firstCurrency = Object.keys(data.rates)[0]
        setFrom(data.base)
        setTO(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
 }, [])

 useEffect(() => {
   if(from != null && to != null) {
      fetch(`${URL}?base=${from}&symbols=${to}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[to]))
   }  
 }, [from, to])

 const handleFromAmount = e => {
   setAmount(e.target.value)
   setAmountFrom(true)
 }
 const handleToAmount = e => {
  setAmount(e.target.value)
  setAmountFrom(false)
 }

  return (
    <div className="App">
      <h1>Converter</h1>
      <Currency
       options={options} 
       selectedC={from} 
       onChangeC={e => setFrom(e.target.value)}
       amount={fromAmount}
       onChangeAmount={handleFromAmount}
       />
      <span>=</span>
      <Currency 
      options={options} 
      selectedC={to} 
      onChangeC={e => setTO(e.target.value)}
      amount={toAmount}
      onChangeAmount={handleToAmount}
      />
    </div>
  );
}

export default App;
