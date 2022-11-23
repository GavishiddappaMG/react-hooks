import { Route, Routes } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import { Home } from './components/Home';
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<AddEmployee/>} />
          <Route path="/edit/:id" element={<EditEmployee/>} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;