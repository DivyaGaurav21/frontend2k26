import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterExample = () => {
    const { counter, increment, decrement, reset } = useCounter();
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment} className='btn'>Increment</button>
      <button onClick={decrement} className='btn'>Decrement</button>
      <button onClick={reset} className='btn'>Reset</button>
    </div>
  )
}

export default CounterExample