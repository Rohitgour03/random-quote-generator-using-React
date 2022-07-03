import React from 'react'

export const Author = (props) => {

  function handleClick(){
    console.log("Render new page with quote of that author")
    // props.getAuthorQuotes(props.author)
    props.setIsRandomQuote(false)
  }

  return (
    <div 
      onClick={handleClick}
      className='flex justify-between items-center w-[90%] max-w-[614px] mx-auto md:mx-20 px-10 md:px-7 py-12 hover:bg-[#333333] hover:text-[#F2F2F2] cursor-pointer transition-all' >
        <div>
            <p className='text-2xl font-bold leading-6 mb-2'>{props.author}</p>
            <span className='text-sm font-medium leading-4 text-[#828282]'>{props.genre}</span>
        </div>
        <div>
            <span className="material-symbols-outlined">arrow_right_alt</span>
        </div>
    </div>
  )
}
