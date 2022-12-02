import Start from './pages/Start';
import Second from './pages/Second'
import Home from './pages/Home'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>}></Route>
          <Route path="/choice" element={<Second/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
