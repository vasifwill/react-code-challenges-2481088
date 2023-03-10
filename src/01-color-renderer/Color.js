export default function Color ({ hex, name, index }) {
  return (
    <div className='color-square'  key={index} style={{ backgroundColor: hex }}>
      <h2 key={index} >{name}</h2>
    </div>
  )
}
