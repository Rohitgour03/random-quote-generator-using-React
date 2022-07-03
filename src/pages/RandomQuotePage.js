import React from 'react'
import Quote from '../components/Quote'
import { Author } from '../components/Author'

const RandomQuotePage = (props) => {
  return (
    <React.Fragment>
        <Quote quoteText={props.randomQuoteData.quoteText} />
        <Author 
            author={props.randomQuoteData.quoteAuthor} 
            genre={props.randomQuoteData.quoteGenre}
            setIsRandomQuote={props.setIsRandomQuote}
        />
    </React.Fragment>
  )
}

export default RandomQuotePage