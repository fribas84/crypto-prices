import { useState } from 'react';
import tw from "tailwind-styled-components"
import Header from './Components/Header';
import Form from './Components/Form';

const Container = tw.div `
  flex
  items-center
  justify-center
  flex-col
  w-90
  grid-cols-1
`


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className="container mx-auto mt-15 pt-10">
      <Header/>
      <Form/>
    </Container>
    
  )
}

export default App
