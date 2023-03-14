import React, { createContext, useContext, useState } from 'react'
const contextApi = createContext(null)

function ColorPicker () {
  const {setChosenColor} = useContext(contextApi)
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={() => setChosenColor(color)} />)}
    </div>
  )
}

function Pixel () {
  const {chosenColor} = useContext(contextApi)
  const [pixels, setPixels] = useState("lightGrey")
  return <div onClick={()=> setPixels(chosenColor)} style={{ height: '20px', width: '20px', backgroundColor: pixels, margin: '1px' }} />
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }} >
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  const [chosenColor, setChosenColor] = useState("lightGrey")

  return (
    <contextApi.Provider value={{chosenColor, setChosenColor}}>
      <ColorPicker />
      <Pixels />
      </contextApi.Provider>
  )
}
