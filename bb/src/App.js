import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import Cards from './components/char/Cards'


function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  const getData = async () => {
    const res = await axios(`https://www.breakingbadapi.com/api/characters?name${query}`)
    const items = res
    console.log(items)
    setItems(items)
    setLoading(false)
  }
  useEffect(() => {
    getData()
  
  }, [query])

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q)  => setQuery(q) }/>
      <Cards loading={loading} items={items} />
    </div>
  );
}

export default App;
