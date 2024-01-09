import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Browse from './pages/Browse/Browse';
// import { useSelector } from 'react-redux';
function App() {
  // const user = useSelector(store => store.user)
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
