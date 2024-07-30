import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header/Header'
import HeroInfo from './components/heroInfo/HeroInfo'
import Toggler from './components/toggler/Toggler';
import GainersAndLosers from './components/gainersAndLosers/GainersAndLosers';
import News from './components/news/News';
import StockUpdates from './components/stockUpdates/stockUpdates';
import WordOfTheDay from './components/wordOfTheDay/WordOfTheDay';
import FeaturedQuestion from './components/featuredQuestion/FeaturedQuestion';
import Course from './components/6DayCourse/6DayCourse';
import DailyChange from './components/dailyChange/DailyChange';
import LongTermReturns from './components/longTermChange/LongTermReturns';

function App() {
  const [fetchedData, setFetchedData] = useState()
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL).then(response => response.json()).then(data => setFetchedData(data[0]))
  },[])

  console.log(fetchedData)
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <main>
      <Toggler darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div id="container">
        <h1 className='heroTitle'>marketminutes</h1>
        <Header title={fetchedData?.title} date={fetchedData?.date} marketStatus={fetchedData?.marketStatus} sensex = {fetchedData?.sensex} nifty = {fetchedData?.nifty}/>
        <DailyChange dailyChange={fetchedData?.daily_change}/>
        <HeroInfo data = {fetchedData?.introduction} aboutMarket={fetchedData?.about_market}/>
        <GainersAndLosers topGainers = {fetchedData?.top_gainers} topLosers={fetchedData?.top_losers}/>
        <News news={fetchedData?.news}/>
        <StockUpdates news={fetchedData?.news}/>
        <WordOfTheDay news={fetchedData?.news}/>
        <FeaturedQuestion news={fetchedData?.news}/>
        <Course news={fetchedData?.news}/>
        <LongTermReturns returns={fetchedData?.long_term_returns}/>
      </div>
    </main>
  );
}

export default App;
