
import './App.css'
import { FooterComponent } from './components/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent'
import ListClientComponent from './components/ListClientComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ClientComponent from './components/ClientComponent'

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
            <Route path='/' element={ <ListClientComponent /> }></Route>  
            <Route path='/clients' element={<ListClientComponent />}></Route>  
            <Route path='/add-client' element={ <ClientComponent />}></Route>
            <Route path='/edit-client/:id' element={ <ClientComponent />}></Route>
        </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
