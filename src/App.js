
import './App.css';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import Signup from './components/signup';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/stats"/>
        <Route path="/signup/" element={<Signup/>}/>
          
          
          <Route path="/login" element={<Login/>}/>
          
          
      </Routes>
    </div>
  );
}

export default App;
