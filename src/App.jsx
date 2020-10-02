import React, { Fragment, useState, useEffect } from 'react';
import './app.css';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
	let citasIniciales = JSON.parse(localStorage.getItem('citas')) || [];

	const [citas, setCitas] = useState(citasIniciales);

	// Realiza la operacion definida cada vez que el state (tambien definido) cambia
	// Utiliza un array de dependencia
	// * [] -> Una ejecucion
	useEffect(() => {
		if (citasIniciales) 
			localStorage.setItem('citas', JSON.stringify(citas));
		 else 
			localStorage.setItem('citas', JSON.stringify([]));
		
	}, [citas]);

	const guardarCita = (cita) => {
		setCitas([...citas, cita]);
	};

	const eliminarCita = (id) => {
		const citasActuales = citas.filter((c) => c.id !== id);
		setCitas(citasActuales);
	};

	return (
		<Fragment>
			<h1>Adminsitrador de pacientes</h1>

			<div className='container'>
				<div className='row'>
					<div className='six columns'>
						<Formulario guardarCita={guardarCita} />
					</div>
					<div className='six columns'>
						<h2>{citas.length > 0 ? 'Administrar citas' : 'No hay citas'}</h2>

						{citas.map((cita) => (
							<Cita cita={cita} key={cita.id} eliminarCita={eliminarCita} />
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
