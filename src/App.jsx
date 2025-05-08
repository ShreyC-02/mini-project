import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherApp from './WeatherApp'
function App() 
{
  
  const [count, setCount] = useState(0);
  
  

  return (
    <>
    <WeatherApp />
    
      
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          
        </button>
        <p>
         
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}
export default App
