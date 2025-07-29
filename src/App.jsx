import { useState } from 'react'
import './App.css'
import {Link}from'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
   
    <h1>welcome to WEB PAGE </h1>
    <h2>Today's date 29 07 2006</h2>
    <h3>2400033071-sai krishna</h3>
    <h3>main page url</h3>
    <Link to="/Page1"><p>path to page 1</p></Link>

     <Link to="/Page2">path to page 2</Link>

     <p><Link to="/Page3">path to page 3</Link></p>
    </>
  )
}

export default App
