import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Footer}  from './components/Footer';
import {Container} from 'react-bootstrap'

function App() {
  

  return (
    <>
     <Container className="main" >
       <h1 className='mt-5 text-center ' > 
        Te Avise
       </h1>
     </Container>
     <Footer/>
    </>
  )
}

export default App
