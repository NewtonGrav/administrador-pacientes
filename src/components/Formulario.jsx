import React, { Fragment, useState } from 'react';

const Formulario = () => {
	const [cita, setCita] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: '',
	});

	const handlerState = (e) => {
		console.log('Escribiendo...', e.target.name);
		setCita({
			...cita,
			[e.target.name]: e.target.value,
		});
	};

	const { mascota, propietario, fecha, hora, sintomas } = cita;

	return (
		<Fragment>
			<h2>Crear Cita</h2>

			<form>
				<label>Nombre de mascota</label>
				<input
					className='u-full-width'
					value={mascota}
					placeholder='Nombre mascota'
					type='text'
					name='mascota'
					onChange={handlerState}
				/>

				<label>Nombre del dueño</label>
				<input
					className='u-full-width'
					value={propietario}
					placeholder='Nombre dueño'
					type='text'
					name='propietario'
					onChange={handlerState}
				/>

				<div className='row'>
					<div className='six columns'>
						<label>Fecha</label>
						<input
							className='u-full-width'
							value={fecha}
							type='date'
							name='fecha'
							onChange={handlerState}
						/>
					</div>

					<div className='six columns'>
						<label>Hora</label>
						<input
							className='u-full-width'
							value={hora}
							type='time'
							name='hora'
							onChange={handlerState}
						/>
					</div>
				</div>

				<label>Sintomas</label>
				<textarea
					className='u-full-width'
					value={sintomas}
					name='sintomas'
					onChange={handlerState}
				></textarea>

				<button className='button button-primary u-full-width' type='submit'>
					Agregar cita
				</button>
			</form>
		</Fragment>
	);
};

export default Formulario;