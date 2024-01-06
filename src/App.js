import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup/Signup';
function App() {
  return(
    <Router>
      <Routes>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Signup/>}/>
        {/* <Route path='/' element = {<Login/>}/> */}
      </Routes>
    </Router>

    );
}

export default App;
