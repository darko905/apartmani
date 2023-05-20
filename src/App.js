import './App.css';
import ApartmaniPage from './Pages/ApartmaniPage';
import FaqPage from './Pages/FaqPage';
import HomePage from './Pages/HomePage';
import TetsominialPage from './Pages/TetsominialPage';
import Wellness from './Pages/Wellness';
import ApartmanDetails from './components/ApartmanDetails';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
     <NavBar/>
      <Routes>
        <Route index path='/' element={<HomePage/>}/>
        <Route index path='/apartmanDetails/:id' element={<ApartmanDetails/>}/>
        <Route index path='/apartmani' element={<ApartmaniPage/>}/>
        <Route index path='/faq' element={<FaqPage/>}/>
        <Route index path='/testominial' element={<TetsominialPage/>}/>
        <Route index path='/wellness' element={<Wellness/>}/>
      </Routes>
     
    </>
  );
}

export default App;
