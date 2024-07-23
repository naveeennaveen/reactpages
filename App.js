import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import Navbar from './router/Navbar';
import Profile from './router/Profile';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        
        
      </Routes>
   
    </div>
  );
}

export default App;
