import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { LoginPage,Home } from './page';
import { Dashboard} from './components';
function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <LoginPage/>} />
              <Route path="/home/*" element={<Home/>}/ >
            </Routes>
          </BrowserRouter>
   
    </div>
  );
}

export default App;
