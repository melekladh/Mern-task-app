import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './compenents/Login';
import Register from './compenents/Register';
import Navbar from './compenents/Navbar';
import Profile from './compenents/Profile';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
    </div>
  );
}

export default App;
