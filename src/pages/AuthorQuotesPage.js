import React from 'react'
import Quote from '../components/Quote'

const AuthorQuotesPage = (props) => {

    const [authorQuotes, setAuthorQuotes] = React.useState([])

    const quotesList = authorQuotes.map(quote => {
        return <Quote key={quote._id} quoteText={quote.quoteText} />
    })

    React.useEffect(() => {
        const getAuthorQuotes = async (author) => {
            const resp = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=5`)
            const data = await resp.json();
            setAuthorQuotes(() => data.data)
        }
        getAuthorQuotes(props.author)
    },[props, props.author])

  return (
    <div>
        <div className='max-w-3xl mx-auto w-[90%] pl-10 md:pl-24 my-12'>
            <h2 className='text-4xl font-bold text-[#333333]'>{props.author}</h2>
        </div>
        {quotesList}
    </div>
  )
}

export default AuthorQuotesPage