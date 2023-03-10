import { useState } from "react"


export default function DarkMode () {
  const [color, setColor] = useState("")
  
  const handleBlackColor = () => {
    setColor("#171717")

  }

  const handleWhiteColor = () => {
    setColor("#fcfbfb")
  }


  return (
    <div className='page' style={{background:color}}>
      <button className='dark-mode-button' onClick={handleBlackColor}>Dark Mode</button>
      <button className='light-mode-button' onClick={handleWhiteColor}>Light Mode</button>
    </div>
  )
}
