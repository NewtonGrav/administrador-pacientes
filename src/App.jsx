import React, { Fragment, useState } from 'react';
import './app.css';
import Formulario from './components/Formulario';

function App() {
	const [citas, setCitas] = useState([]);

	const guardarCita = (cita) => {
		setCitas([...citas, cita]);
	};

	return (
		<Fragment>
			<h1>Adminsitrador de pacientes</h1>

			<div className='container'>
				<div className='row'>
					<div className='six columns'>
						<Formulario guardarCita={guardarCita} />
					</div>
					<div className='six columns'>2</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
