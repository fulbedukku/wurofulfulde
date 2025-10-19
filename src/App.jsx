import { useState } from 'react'

import './App.css'
import { Header, Footer } from './components'
import { AllRoutes } from './routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <AllRoutes />
       
      </div>
      
      <Footer />
    </>
  )
}

export default App
