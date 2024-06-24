import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className="w-full h-screen flex justify-center" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap bottom-10 justify-center gap-2 p-2 rounded-xl" style={{backgroundColor: 'white'}}>
            <button className='py-1 px-2 rounded-xl' style={{backgroundColor:'red'}}
            onClick={()=> setColor('red')}>Red</button>

            <button className='py-1 px-2 rounded-xl' style={{backgroundColor:'green'}}
            onClick={()=> setColor('green')}>Green</button>
         
            <button className='py-1 px-2 rounded-xl' style={{backgroundColor:'yellow'}}
            onClick={()=> setColor('yellow')}>Yellow</button>
         
            <button className='py-1 px-2 rounded-xl' style={{backgroundColor:'olive'}}
            onClick={()=> setColor('olive')}>Olive</button>

            <button className='py-1 px-2 rounded-xl' style={{backgroundColor:'purple'}}
            onClick={()=> setColor('purple')}>Purple</button>
         
            <button className='py-1 px-2 rounded-xl' style={{backgroundColor:'white'}}
            onClick={()=> setColor('white')}>White</button>
         
            <button className='py-1 px-2 rounded-xl' style={{backgroundColor:'black',color:'white'}}
            onClick={()=> setColor('black')}>Black</button>
         
        </div>
      </div>
  )
}

export default App