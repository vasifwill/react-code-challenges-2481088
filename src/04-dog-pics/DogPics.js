import axios from "axios"
import { useEffect, useState } from "react"

export default function DogPics () {
  const [dogs, setDogs] = useState('')
  const [button, setButton] = useState(false)
  // API: https://dog.ceo/dog-api/
  //https://dog.ceo/api/breeds/image/random
  //"https://images.dog.ceo/breeds/bulldog-boston/n02096585_4575.jpg"

  const handleClick = async() => {
    await axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      setDogs(res.data.message)}).catch((error) => {
        alert(error)
    })
    setButton(true)
    
  }

  useEffect(() => {
    handleClick()
  }, [button])

  return (
    <div className='dog-pics'>
      <img src={ button ? dogs : "https://images.dog.ceo/breeds/bulldog-boston/n02096585_4575.jpg"} alt="dog"/>
      <button onClick={handleClick}>🐶</button>
    </div>
  )
}
