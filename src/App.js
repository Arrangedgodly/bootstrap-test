import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import './blocks/links.css';

function App() {
  const [isActive, setIsActive] = React.useState('home');

  const handleHomeClick = () => {
    setIsActive('home');
  }

  const handleProjectClick = () => {
    setIsActive('projects');
  }

  return (
    <BrowserRouter>
      <div>
        <Header>
        <nav className='text-center h2 links'>
          <NavLink to='/' className={isActive === 'home' ? 'text-primary' : 'text-secondary'} onClick={handleHomeClick}>Home</NavLink>
          <NavLink to='/projects' className={isActive === 'projects' ? 'text-primary' : 'text-secondary'} onClick={handleProjectClick}>Projects</NavLink>
        </nav>
        </Header>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
