import React, { Fragment, useState } from 'react';

const Formulario = () => {
	const [cita, setCita] = useState({
		nombre: '',
		propietario: '',
		fecha: null,
		hora: '',
		sintomas: ''
	})

	return (
		<Fragment>
			<h2>Crear Cita</h2>

			<form>
				<label>Nombre de mascota</label>
				<input
					className='u-full-width'
					placeholder='Nombre mascota'
					type='text'
					name='mascota'
				/>

				<label>Nombre del dueño</label>
				<input
					className='u-full-width'
					placeholder='Nombre dueño'
					type='text'
					name='propietario'
				/>

				<div className='row'>
					<div className='six columns'>
						<label>Fecha</label>
						<input className='u-full-width' type='date' name='fecha' />
					</div>

					<div className='six columns'>
						<label>Hora</label>
						<input className='u-full-width' type='time' name='hora' />
					</div>
				</div>

				<label>Sintomas</label>
				<textarea className='u-full-width' name='sintomas'></textarea>

				<button className='button button-primary u-full-width' type='submit'>
					Agregar cita
				</button>
			</form>
		</Fragment>
	);
};

export default Formulario;
