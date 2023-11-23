import { useState } from 'react'

import './App.css'
import Navigation from './components/navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContanctForm/ContactForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <main className='main_container'>
      <ContactHeader /> 
      <ContactForm />
      </main>
    </div>
  )

}

export default App
