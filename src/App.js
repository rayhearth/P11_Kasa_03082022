// import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from '@/pages/Public/PublicRouter';
import '@/App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
