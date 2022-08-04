// import logo from '@/logo.svg';np
import '@/App.css';
import Home from '@/pages/Home';
import Accommodation from '@/pages/Accommodation';
import AboutUs from '@/pages/AboutUs';
import Error from '@/_utils/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
