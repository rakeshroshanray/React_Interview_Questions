import React, { useEffect, useRef, useState } from 'react'

function useThrottle(value,delay) {
    const [throttle,setThrottle] = useState(value)

    const lastExecuted = useRef(Date.now());

    
    useEffect(()=>{
       const handler= setTimeout(() =>{
            const now = Date.now();
            // console.log(now,lastExecuted,throttle)
           if(now-lastExecuted.current >= delay){
             setThrottle(value)
             lastExecuted.current = now;
           }
        }, delay - (Date.now() - lastExecuted.current));
    //    handleThrottle(); 
       return () => {clearTimeout(handler)}; // cleanup function to cancel the timer on unmount
    }, [delay,value]) // empty array ensures effect is only run once on mount
    
  return throttle;

}

export default useThrottle