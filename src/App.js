import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import A from './A';
import B from './B';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<A />}>
            <Route path='/b' element={<B />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
