import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <nav className='text-center h2'>
          <NavLink to='/projects' className='text-secondary' activeClassName='text-primary'>Projects</NavLink>
        </nav>
        <Routes>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
