import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Signup' element={<Signup></Signup>}></Route>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          
          
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

