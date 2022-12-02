import { Route, Routes } from 'react-router-dom';
//views
import Dashboard from './views/Dashboard/Dasboard';
import MainPage from './views/MainPage/MainPage';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import NotFound from './views/NotFound/NotFound';
//components
import Navbar from './components/Navbar/Navbar';

function App() {

  return (<>
  <Navbar/>
  <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </>
  );

}

export default App;
