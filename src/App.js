import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter as Router , Routes, Route, useNavigate} from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Browse from './pages/Browse/Browse';
function App() {
  return(
    <Router>
      <Routes>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Signup/>}/>
        <Route exact path='/' element = {<Browse/>}/>
      </Routes>
    </Router>
    );
}

export default App;
