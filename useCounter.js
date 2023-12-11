import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {
  
    const [counter, setCounter] = useState(initialValue)

    const increment = ( value = 1) => {  // Con argumento
        setCounter(counter+value)
    }

    const decrement = () => {  // Sin argumento
        if ( counter == 0 ) return
        setCounter(counter-1)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
