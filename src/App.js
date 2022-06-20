import './App.css';
import Navbar from './components/Navbar';
import WelcomeMessage from './components/WelcomeMessage';
import Login from './components/Login';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import { Routes, Route } from 'react-router-dom'
import AddNewProductForm from './components/AddNewProductForm';
import ShoppingCartPage from './components/ShoppingCartPage';
import CheckIfOfAge from './components/CheckIfOfAge';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/ageVerification' element={<CheckIfOfAge />} />
        <Route path='/shoppingCart' element={<ShoppingCartPage />} />
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
