import React, { useEffect } from 'react'

const Keypad = ({ result, setResult, useOperator, setPreviousResult, setOperator, useEquall }) => {
  

  const handleValue = (e) => {

    if(result != 0){
      setResult(result + e.target.value);
    }else{
      setResult(e.target.value);
    }
  }

  const resetValue = () => {
    setResult(0);
    setPreviousResult(0);
    setOperator("");
  }

  const delValue = () => {
    if(result.length != 0){
      setResult(result.slice(0,result.length-1));
    }
  }

  const handleOperator = (e) => {
    useOperator(e.target.value);
  }

  const handleEquall = (e) => {
    useEquall();
  }

  return (
    <>
      <div className='bg-bgKeypad px-8 py-9 rounded-2xl'>
        <div className='grid grid-cols-4 gap-6'>
        <button onClick={handleValue} value={"7"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">7</button>
        <button onClick={handleValue} value={"8"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">8</button>
        <button onClick={handleValue} value={"9"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">9</button>
        <button onClick={delValue} value={"DEL"} className="bg-bgKey2 text-3xl font-bold text-white pt-2 pb-3 px-5 rounded-xl border-b-4 border-b-bgShadowKey3 hover:opacity-90">DEL</button>
        <button onClick={handleValue} value={"4"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">4</button>
        <button onClick={handleValue} value={"5"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">5</button>
        <button onClick={handleValue} value={"6"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">6</button>
        <button onClick={handleOperator} value={"+"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">+</button>
        <button onClick={handleValue} value={"1"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">1</button>
        <button onClick={handleValue} value={"2"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">2</button>
        <button onClick={handleValue} value={"3"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">3</button>
        <button onClick={handleOperator} value={"-"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">-</button>
        <button onClick={handleValue} value={"."} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">.</button>
        <button onClick={handleValue} value={"0"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">0</button>
        <button onClick={handleOperator} value={"/"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">/</button>
        <button onClick={handleOperator} value={"x"} className="bg-bgKey1 text-textColor font-bold text-4xl pt-2 pb-3 px-5 rounded-xl border-4 border-b-bgShadowKey1 hover:opacity-90">x</button>
        <button onClick={resetValue} value={"RESET"} className="bg-bgKey2 text-3xl font-bold text-white pt-3 pb-4 px-5 rounded-xl border-b-4 border-b-bgShadowKey3 hover:opacity-90 col-span-2">RESET</button>
        <button onClick={handleEquall} value={"="} className="bg-bgKey3 text-3xl font-bold text-white pt-3 pb-4 px-5 rounded-xl border-b-4 border-b-bgShadowKey2 hover:opacity-90 col-span-2">=</button>
        </div>
      </div>
    </>
  )
}

export default Keypad