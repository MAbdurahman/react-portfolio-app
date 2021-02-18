import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Services from '../components/services/Services';
import Experience from '../experience/Experience';
import About from './../components/about/About';
import './App.css';

function App() {
	return (
		<>
			<Particles
				className='particles-canvas'
				params={{
					particles: {
						number: {
							value: 34,
							density: {
								enable: true,
								value_area: 900,
							},
						},
						shape: {
							type: 'triangle',
							stroke: {
								width: 6,
								color: '#f9ab00',
							},
						},
					},
				}}
			/>
			<Navbar />
			<Header />
			<About />
			<Services />
			<Experience />
		</>
	);
}

export default App;
