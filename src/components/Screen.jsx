import React from 'react'

const Screen = ({ result, previousResult }) => {

  let finalResult = result === 0 ? previousResult : result;

  // condition for rounding of the infinite threes in the result
  if(finalResult.toString(10).includes(".")){
    let dotIndex = finalResult.toString(10).indexOf(".");
    finalResult = + finalResult.toString(10).slice(0, dotIndex+5);
  }

  return (
    <>
      <div className='bg-bgScreen min-h-[8rem] text-right text-white font-semibold text-6xl pt-8 pb-9 pr-12 pl-40 rounded-2xl'>
        <p>{finalResult}</p>
      </div>
    </>
  )
}

export default Screen