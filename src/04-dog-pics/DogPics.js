import axios from "axios"
import { useEffect, useState } from "react"

export default function DogPics () {
  const [dogs, setDogs] = useState('')
  const [button, setButton] = useState(false)
 

  // const handleClick = aync() => {
  //   const response = await fetch("https://dog.ceo/api/breeds/image/random")
  //   const dog = response.json()
  //   return dog.message
  // }

  // useEffect(() => {
  //   handleClick().then(res => setDogs(res))
  // },[])

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
