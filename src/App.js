import './App.css';
import{Routes ,  Route} from 'react-router-dom'
import Home from './Views/Home';
import AllSeries from './Views/AllSeries';
import AddNewSerieForm from './Views/AddNewSerieForm';
import Favorites from './Views/Favorites';
import Navbar from './components/Navbar';
import Login from './Views/Login';
import { useContext } from 'react';
import { LoginContext } from './store/loginContext';
function App() {
  const logC= useContext(LoginContext)
  if(logC.isLogged)
  return (
  <>
  <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/all-series' element={<AllSeries></AllSeries>}></Route>
    <Route path='add-new-serie' element={<AddNewSerieForm></AddNewSerieForm>}></Route>
    <Route path='/favorites' element={<Favorites></Favorites>}></Route>
  </Routes>
  </>
  )
  else {
    return (
      <>
        <Navbar></Navbar>

 

          <Routes>

            <Route path="/login" element={<Login></Login>}></Route>

          </Routes>
        
      </>
    )
  }
}

export default App;
