import './App.css';
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import About from '../about/About';
import Home from '../home/Home';

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Contact/>
    <About/>
   </div>
  );
}



export default App;
