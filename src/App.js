import './App.css';
import ApartmaniPage from './Pages/ApartmaniPage';
import FaqPage from './Pages/FaqPage';
import HomePage from './Pages/HomePage';
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
      </Routes>
     
    </>
  );
}

export default App;
