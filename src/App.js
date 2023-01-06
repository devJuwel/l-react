// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container my-4">
    <TextForm title="Enter your text here"/>
    </div>
    <About title="this is a accrodion"/>
    </>
  );
}

export default App;
