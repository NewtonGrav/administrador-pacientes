import React, { Fragment } from 'react';

const Formulario = () => {
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
					name='duenio'
				/>

				<div className='row'>
					<div className='six columns'>
						<label>Fecha</label>
						<input className='u-full-width' type='date' name='duenio' />
					</div>

					<div className='six columns'>
						<label>Hora</label>
						<input className='u-full-width' type='time' name='duenio' />
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
