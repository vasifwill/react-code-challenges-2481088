import { useEffect, useRef } from "react"

export default function FocusInput() {
  const focus = useRef(null)
  useEffect(() => {
focus.current.focus()
  },[])
  return (
    <div>
      <label htmlFor='focused-input'>Focus me on page load!</label>
      <input ref={focus} name='focused-input'></input>
    </div>
  )
}
