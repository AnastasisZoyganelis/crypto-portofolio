import { AuthProvider } from './helpful/AuthContext';
import './App.css';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import Signup from './components/signup';
import Portofolio from './helpful/Portofolio';
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/stats"/>
        <Route path="/signup/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/portofolio" element={<Portofolio/>}/>
          
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
