import './App.css';
import{BrowserRouter, Routes, Route,} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import News from './components/News';
import NotFountPage from './components/NotFountPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path="*" element={<NotFountPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
