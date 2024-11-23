import { useEffect, useState } from 'react'
 
import './App.css'
import useThrottle from './Hooks/useThrottle'
import useDebouncing from './Hooks/useDebouncing'
function App() {
  const [window1, setWindow1] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const handleResize = () => {
    setWindow1({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
 // const handleThrottle =  useThrottle(handleResize, 500)
 const handleDebounce = useDebouncing(window1, 500);

  // useEffect(() => {
  //   console.log("here", handleThrottle);
  //   window.addEventListener('resize', handleThrottle)
  //   return () => {
  //     window.removeEventListener('resize', handleThrottle)}
  // },[])
  useEffect(() => {
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)}
  })

  return (
    <>
      <h1>USE_Throttle_Hook</h1>
      {/* <div>
        Window dimensions: {window1.width} x {window1.height}
      </div> */}
      <div>
        Window dimensions: {handleDebounce.width} x {handleDebounce.height}
      </div>
    </>
  )
}

export default App
