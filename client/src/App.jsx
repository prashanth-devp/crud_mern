import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import CreateMarks from './components/createMarks';
import UpdateMarks from './components/UpdateMarks';
import DisplayMarks from './components/DisplayMarks';
import Home from './components/Home';
import Teacher from './components/Teacher';
// import Home from './components/Home';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/teacher" element={<Teacher />}></Route>
          <Route path="/display" element={<DisplayMarks />}></Route>
          <Route path="/create" element={<CreateMarks />}></Route>
          <Route path="/update/:id" element={<UpdateMarks/>}></Route>
          {/* <Route path="/" element={<Home />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
