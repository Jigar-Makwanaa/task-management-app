import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Add from './pages/component/Add';
import View from './pages/component/View';
import Edit from './pages/component/Edit';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/task' element={<Add/>} />
                <Route path='/view' element={<View/>} />
                <Route path='/edit/:id' element={<Edit/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
