import './App.css';
import Navbar from './components/Navbar';
import WelcomeMessage from './components/WelcomeMessage';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <WelcomeMessage /> */}
      <Login />
    </div>
  );
}

export default App;
