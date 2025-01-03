import APOD from './components/apod_components/APOD';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home_components/Home';
import "react-datepicker/dist/react-datepicker.css";
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/apod' element = {<APOD />} />
    </Routes>
    </>
  );
}

export default App;
