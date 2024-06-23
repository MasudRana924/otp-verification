import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Error from './pages/Error';
import Success from './pages/Success';
import Cart from './pages/Cart';
import AgreementSuccess from './pages/AgreementSuccess';
import Navbar from './common/Navbar';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/error?' element={<Error />} />
          <Route path='/success' element={<Success />} />
          <Route path='/agreement/success' element={<AgreementSuccess />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
