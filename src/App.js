import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './Componants/Home/Home';
import LastListening from './Componants/LastListening/LastListening';
import Loader from './Componants/Loader/Loader';

function App()
{
  return (
    <div className="App">
      <Loader />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/last-listening' exact element={<LastListening />}></Route>
      </Routes>
    </div>
  );
}

export default App;

