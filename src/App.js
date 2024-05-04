
import Home from './components/Home';
import Footer from './components/Footer';
import Head from './components/Head';
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom';
import Travel from './components/Travel';
import Nature from './components/Nature';
import Sports from './components/Sports';

function App() {
  return (
    <div >
    
     <Head/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/travel' element={<Travel/>}/>
        <Route path='/nature' element={<Nature/>}/>
        <Route path='/sports' element={<Sports/>}/>
     </Routes>

     <Footer/>
    </div>
  );
}

export default App;
