import React, { useEffect, useState } from 'react'

function useDebouncing(value,delay) {

    const [bounce, setBounce] = useState(value);
    
    useEffect (()=>{
        const timer = setTimeout(() => {
            setBounce(value);
        }, delay);
        return ()=>{clearTimeout(timer)}
    } ,[value,delay])

  return bounce
}

export default useDebouncing