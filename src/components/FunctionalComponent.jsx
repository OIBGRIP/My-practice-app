import React from "react"

export function FunctionalComponent () {
    const [state, setState] = React.useState({ value : 0})

    const Increment = () => {
      setState({...state, value : state.value + 1})
    }

    const Decrement = () => {
      setState({...state, value : state.value - 1})
    }

    const Multiply = () => [
      setState ({...state, value : state.value * 2})
    ]

    const Divide = () => {
      setState ({...state, value : state.value / 2})
    }

    return <div>
      <h1>Functional Component</h1>

      <p>Value = <b>{state.value}</b></p>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Multiply}>*</button>
            <button onCanPlay={Divide}>/</button>
        
    </div>
  }