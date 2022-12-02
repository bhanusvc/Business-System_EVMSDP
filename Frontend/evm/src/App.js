import Start from './components/Start';
import Second from './components/Second'
import Home from './components/Home'

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
