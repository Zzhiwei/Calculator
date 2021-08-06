import { useState, useRef, useEffect } from 'react';
import './style/App.scss';

function appendSpaces(s) {
  return " " + s + " "
}

function isOperator(c) {
  return operator.includes(c)
}

function operate(curr, num, operator) { 
  const numVal = parseFloat(num)
  console.log({operator})
  switch (operator) {
    case "+":
      return curr + numVal
    case "-":
      return curr - numVal
    case "x":
      return curr * numVal
    case "/":
      return curr / numVal
    default:
      return curr
  }

}

function parseOperations(arr) {
  let res = parseFloat(arr[0])
  for (let i = 1; i < arr.length; i += 2) {
    res = operate(res, arr[i + 1], arr[i])
  }
  return res

}

const operator = ["+", "-", "x", "/"]
const ZERO = "0"



function App() {
  const [theme, setTheme] = useState(1)
  const [operationArray, setOperationArray] = useState([])
  const [inputStr, setInputStr] = useState("")
  const inputRef = useRef()

  //theme logic
  function getClass(str) {
    return `${str} ${theme === 1 ? "" : theme === 2 ? "theme2" : "theme3"}`
  }


  const changeTheme = () => {
    if (theme === 1) {
      setTheme(2)
    } else if (theme === 2) {
      setTheme(3)
    }  else {
      setTheme(1)
    }
  }


  //calculator logic

  useEffect(() => {
    inputRef.current.scroll(inputRef.current.clientWidth, 0)
  }, [inputStr])

  const handleClick = (e) => {
    const empty = operationArray.length === 0
    const symbol = e.target.innerText
    const symbolIsOperator = operator.includes(symbol)

    if (symbolIsOperator) {
      if (empty || isOperator(operationArray[operationArray.length - 1]) ) {
        return
      } else {
        setOperationArray(prev => prev.concat([symbol]))
        setInputStr(prev => prev + appendSpaces(symbol))
      }
    } else { 
      if (empty || isOperator(operationArray[operationArray.length - 1])) {
        if (symbol === ZERO) {
          return 
        }
        setOperationArray(prev => prev.concat([symbol]))
        setInputStr(prev => prev + symbol)
      } else {
        const newArr = [...operationArray]
        const lastString = newArr[newArr.length - 1] 
        newArr[newArr.length - 1] = lastString + symbol
        setOperationArray(newArr)
        setInputStr(prev => prev + symbol)
      }
    }

    


  }

  const handleDel = () => {
    if (operationArray.length === 0) {
      return 
    }

    if (isOperator(operationArray[operationArray.length - 1])) {

      setInputStr(prev => prev.slice(0, prev.length - 3))
      setOperationArray(prev => prev.slice(0, prev.length - 1))
    } else {      
      setInputStr(prev => prev.slice(0, prev.length - 1))
      setOperationArray(prev => {
        const arr = [...prev]
        const lastString = arr[arr.length - 1]
        if (lastString.length <= 1) {
            return arr.slice(0, arr.length - 1)
        }
        arr[arr.length - 1] = lastString.slice(0, lastString.length - 1) 
        return arr
      })
    }
  }

  const handleReset = () => {
    setOperationArray([])
    setInputStr("")
  }

  const handleCalculate = () => {
    if (operationArray.length === 0
      || isOperator(operationArray[operationArray.length - 1])) {
      return
    }
    const resString = parseOperations(operationArray).toString()
    setInputStr(resString)
    setOperationArray([resString])
  }

  

  return (
    <div className={getClass("main")}>
      <div className="container">
        <header className="header">
          <div className={getClass("left")}>
            calc
          </div>
          <div className={getClass("right")}>
            <div className="smalltheme">
              theme
            </div>
              <div className="toggler">
                <div className="selections">
                  <span>1</span><span>2</span><span>3</span>
                </div>
                <div onClick={changeTheme} className={getClass("indicator")}>

                </div>
              </div>
          </div>
        </header>

        <div className={getClass("display")}>
            <input ref={inputRef} className={getClass("")} ref={inputRef} disabled value={inputStr}>
            </input>
            <span></span>
          
        </div>
        
        <div className={getClass("body")}>
          <div className="gridwrapper">
            <button className={getClass("")} onClick={handleClick}>7</button>
            <button className={getClass("")} onClick={handleClick}>9</button>
            <button className={getClass("")} onClick={handleClick}>8</button>
            <button className={getClass("uppercase")} onClick={handleDel}>del</button>
            <button className={getClass("")} onClick={handleClick}>4</button>
            <button className={getClass("")} onClick={handleClick}>5</button>
            <button className={getClass("")} onClick={handleClick}>6</button>
            <button className={getClass("")} onClick={handleClick}>+</button>
            <button className={getClass("")} onClick={handleClick}>1</button>
            <button className={getClass("")} onClick={handleClick}>2</button>
            <button className={getClass("")} onClick={handleClick}>3</button>
            <button className={getClass("")} onClick={handleClick}>-</button>
            <button className={getClass("disabled")}  >.</button>
            <button className={getClass("")}  onClick={handleClick}>0</button>
            <button className={getClass("")} onClick={handleClick}>/</button>
            <button className={getClass("")} onClick={handleClick}>x</button>
            <button className={getClass("twocols uppercase")} onClick={handleReset}>reset</button>
            <button className={getClass("twocols equals")} onClick={handleCalculate}>=</button>
            

          </div>
        </div>

      </div>
    </div>
    
  );
}

export default App;
