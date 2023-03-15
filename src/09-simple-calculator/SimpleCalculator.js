import { useReducer } from "react"

const initialState = {
  num1:0,
  num2:0,
  result:"no result"
}

function reducer (state, action) {
  switch (action.type) {
    case "number1":
      return{...state, num1:action.number}
    case "number2":
      return{...state, num2:action.number}
    case "increment":
    return{...state, result:state.num1 + state.num2}
    case "decrement":
      return{...state, result:state.num1 - state.num2}
    case "clean":
      return initialState
    default:
      break;
  }

}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [state, dispatch] = useReducer(reducer, initialState)

const increment = () => {
dispatch({type:"increment", })
}

const decrement = () => {
  dispatch({type:"decrement"})

}

const cleanCal = () => {
  dispatch({type:"clean"})

}

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type:"number1", number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type:"number2", number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={cleanCal}>c</button>
      </div>
      <div><h2>Result:{state.result}</h2></div>
    </div>
  )
}
