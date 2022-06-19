import './App.css';
import Navbar from './components/Navbar';
import WelcomeMessage from './components/WelcomeMessage';
import Login from './components/Login';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import { Routes, Route } from 'react-router-dom'
import AddNewProductForm from './components/AddNewProductForm';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/addNewProduct' element={<AddNewProductForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPasswordPage />} />
      </Routes>
      {/* <WelcomeMessage /> */}
      {/* <Login /> */}
      {/* <ForgotPasswordPage /> */}
    </div>
  );
}

export default App;
