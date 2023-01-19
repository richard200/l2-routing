import './App.css';
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import About from '../about/About';
import Home from '../home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from '../user/User';

function App() {
  return (
   <BrowserRouter>
    <Navbar/>

<Routes>
<Route path='/' element={ <Home/>}></Route>
<Route path='/contact' element={ <Contact/>}></Route>
<Route path='/about' element={ <About/>}></Route>
<Route path='user/:name' element={<User/>}></Route>

</Routes>

   </BrowserRouter>
  );
}



export default App;
