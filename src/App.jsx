
import './App.css';
import Cart from './Cart';
import Home from './Home';
import  { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
