
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Jobs from './Components/Jobs.js';
import Home from './Components/Home.js';
import NavBar from './NavBar/NavBar.js';

function App() {
  return (
		<div className='App'>
			<div className='App-child-container'>
				<NavBar />
				<main className='Main'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/Jobs' element={<Jobs />} />
					</Routes>
				</main>
				{/* <Footer /> */}
			</div>
		</div>
	);
}

export default App;
