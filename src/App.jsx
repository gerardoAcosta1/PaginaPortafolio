import { useState } from 'react'
import './App.css'
import Menu from './Components/Menu'
import { Container } from './Components/Container'
import Container2 from './Components/Container2'
import Container3 from './Components/Container3'
import Container4 from './Components/Container4'

function App() {
 
const [visible, setVisible] = useState(false)
const [counter, setCounter] = useState(1)

const isVisible = () => {
  setVisible(!visible)
  if(visible){
    setVisible(false)
  }
}
  return (
    <div className='main'>
      <Menu 
      visible={visible}
      isVisible={isVisible}
      setCounter={setCounter}
      counter={counter}
      />
      <Container counter={counter}/>
      <Container2 counter={counter}/>
      <Container3 counter={counter}/>
      <Container4 counter={counter}/>
    </div>
  )
}

export default App
