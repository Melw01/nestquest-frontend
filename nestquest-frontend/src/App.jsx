
import './App.css'
import { FooterComponent } from './components/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent'
import ListUserComponent from './components/ListUserComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserComponent from './components/UserComponent'

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
            <Route path='/' element={ <ListUserComponent /> }></Route>  
            <Route path='/user' element={<ListUserComponent />}></Route>  
            <Route path='/add-user' element={ <UserComponent />}></Route>
        </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
