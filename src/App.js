import './App.css';
import Navbar from './components/Navbar';
import WelcomeMessage from './components/WelcomeMessage';
import Login from './components/Login';
import ForgotPasswordPage from './components/ForgotPasswordPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <WelcomeMessage /> */}
      {/* <Login /> */}
      <ForgotPasswordPage />
    </div>
  );
}

export default App;
