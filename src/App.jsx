import React, { useState } from 'react'
import Header from './components/Header'
import Keypad from "./components/Keypad"
import Screen from "./components/Screen"

const App = () => {

  const [result, setResult] = useState(0);
  const [previousResult, setPreviousResult] = useState(0);
  const [operator, setOperator] = useState("");

  const calculate = (first, second, operator) => {

    let firstNumber = + first;
    let secondNumber = + second;
    let finalResult = 0;

    switch (operator) {

      case "+":
        finalResult = firstNumber + secondNumber;
        break;
      case "-":
        finalResult = firstNumber - secondNumber;
        break;
      case "/":
        finalResult = firstNumber / secondNumber;
        break;
      case "x":
        finalResult = firstNumber * secondNumber;
        break;

    }

    return finalResult;
  }

  const useEquall = () => {

    if((operator == "x" || operator == "/") && (previousResult == 0 || result == 0)){
      return;
    }

    setPreviousResult(calculate(previousResult,result,operator));
    setResult(0);
  }

  const useOperator = ( oper ) => {

    if((operator == "x" || operator == "/") && (previousResult == 0 || result == 0)){
      return;
    }

    if(operator !== ""){
      setPreviousResult(calculate(previousResult,result,operator));
      setOperator(oper);
      setResult(0);
    }

    if(operator === ""){
      setOperator(oper);
      setPreviousResult(result);
      setResult(0);
    }
  }

  return (
    <>
      <div className='bg-bgMain min-h-screen h-full w-full grid place-content-center'>
        <div className='w-full max-w-xl mx-auto flex flex-col gap-12'>
          <Header />
          <div className='flex flex-col gap-10'>
            <Screen result={result} previousResult={previousResult} />
            <Keypad setResult={setResult} result={result} useOperator={useOperator} setOperator={setOperator} setPreviousResult={setPreviousResult} useEquall = {useEquall} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App