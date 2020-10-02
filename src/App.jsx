import React, { Fragment } from 'react';
import './index.css';
import Formulario from './components/Formulario';

function App() {
	return (
		<Fragment>
			<h1>Adminsitrador de pacientes</h1>

			<div className='container'>
				<div className='row'>
					<div className='six columns'>
						<Formulario />
					</div>
					<div className='six columns'>2</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
