import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/SignUp/SignUp';

function App() {
	return (
		<div className='flex flex-col'>
			<Navbar></Navbar>
			<Routes>
				<Route path='/' element={<Homepage />}></Route>
				<Route path='/home' element={<Homepage />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/appointment' element={<Appointment />}></Route>
				<Route path='/reviews' element={<Reviews />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>
			</Routes>
		</div>
	);
}

export default App;
