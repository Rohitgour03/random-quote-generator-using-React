import React from 'react'

const Quote = (props) => {
  return (
    <div className='mx-auto w-[90%] max-w-3xl pl-8 md:pl-24 mb-10 md:mb-24 border-l-8 border-[#F7DF94]'>
        <p className='text-3xl md:text-4xl leading-[44px] font-medium'>
            {props.quoteText}
        </p>
    </div>
  )
}

export default Quote