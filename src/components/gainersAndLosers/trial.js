import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import HeroInfo from './components/heroInfo/HeroInfo'
import TogglerApp from './components/toggler/Toggler'

function App() {

  // fetching data from API -> storing in fetchedData
    const [fetchedData, setFetchedData] = useState()

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL).then(response => response.json()).then(data => setFetchedData(data[0]))
  },[])

  console.log(fetchedData)
  
  return(
    <div className='body'>
      <Header title={fetchedData?.title} date={fetchedData?.date} marketStatus={fetchedData?.marketStatus} sensex = {fetchedData?.sensex} nifty = {fetchedData?.nifty}/>
      <HeroInfo data = {fetchedData?.introduction}/>
      <TogglerApp />
    </div>
  )
  }

export default App
