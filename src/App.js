import './index';
import Header from './components/Header';
import Employees from './pages/Employees';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>  
      <Header>
        <Routes>
          <Route path='/Employees' element={<Employees />}/>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
