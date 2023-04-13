import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav/Nav'
import NewTask from './components/form/NewTask'
import Tasks from './components/task/Tasks'

function App() {
  const [ttask, setTtask] = useState([])

  return (
    <div className="App">
      <Nav />
      <div className='container'>
      <NewTask />
      <Tasks  />
      </div>
      
    </div>
  )
}

export default App
