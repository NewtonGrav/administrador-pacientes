import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';

const Formulario = ({ guardarCita }) => {
	const [cita, setCita] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: '',
	});

	const [errorValidacion, setErrorValidacion] = useState(false);

	const handlerState = (e) => {
		setCita({ ...cita, [e.target.name]: e.target.value });
	};

	const { mascota, propietario, fecha, hora, sintomas } = cita;

	const submitCita = (e) => {
		e.preventDefault();

		if (
			mascota.trim() === '' ||
			propietario.trim() === '' ||
			fecha.trim() === '' ||
			hora.trim() === '' ||
			sintomas.trim() === ''
		) {
			setErrorValidacion(true);
			return;
		}
		setErrorValidacion(false);

		cita.id = uuid();

		guardarCita(cita);

		setCita({
			mascota: '',
			propietario: '',
			fecha: '',
			hora: '',
			sintomas: '',
		});

	};

	return (
		<Fragment>
			<h2>Crear Cita</h2>

			{errorValidacion ? (
				<p className='alerta-error'>Todos los campos son obligatorios</p>
			) : null}

			<form onSubmit={submitCita}>
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
