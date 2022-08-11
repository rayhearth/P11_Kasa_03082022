import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Layout, Home, Appartements, AboutUs} from '@/pages/Public'
import Error from '@/_utils/Error';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/appartements" element={<Appartements />} />
                <Route path="/about-us" element={<AboutUs />} />

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
