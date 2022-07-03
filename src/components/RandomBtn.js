import React from 'react'

const RandomBtn = (props) => {

  function clickHandler(){
    console.log("Get a random quote")
    props.getRandomQuote();
  }

  return (
    <button 
        onClick={clickHandler}
        className='flex justify-between items-center gap-2 absolute top-9 right-[10%] py-2 px-4'
    >
        <span className='text-lg font-medium leading-tight text-[#333333]'>random</span>
        <span className="material-symbols-outlined">autorenew</span>
    </button>
  )
}

export default RandomBtn