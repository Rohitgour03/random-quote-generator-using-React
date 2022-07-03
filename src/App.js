import './App.css';
import React from 'react';

import RandomBtn from './components/RandomBtn';
import RandomQuotePage from './pages/RandomQuotePage';
import AuthorQuotesPage from './pages/AuthorQuotesPage';

function App() {

  const [randomQuoteData, setRandomQuoteData] = React.useState({})
  const [isRandomQuote, setIsRandomQuote] = React.useState(true)

  React.useEffect(() => {
    getRandomQuote()
  }, [])

  const getRandomQuote = async () => {
    setIsRandomQuote(true)
    const resp = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    const data = await resp.json()
    setRandomQuoteData(() => data.data[0])
  }

  return (
    <div className="font-raleway grid place-items-center relative min-h-screen">
      <RandomBtn getRandomQuote={getRandomQuote} />
      <main className='mt-32 mb-10 md:mt-48 md:mb-20'>
        {
          isRandomQuote ?
            <RandomQuotePage 
              randomQuoteData={randomQuoteData}
              setIsRandomQuote={setIsRandomQuote} /> :
            <AuthorQuotesPage 
              author={randomQuoteData.quoteAuthor} 
            />
        }
      </main>

      <footer className='flex justify-center items-center gap-2 w-full py-4 text-center text-[#828282]'>
        <span>Created by </span>
        <a href='https://devchallenges.io/portfolio/Rohitgour03' className='font-semibold'>Rohitgour03</a>
        <a href="https://devchallenges.io">devChallenges.io</a> 
      </footer>
    </div>
  );
}

export default App;
