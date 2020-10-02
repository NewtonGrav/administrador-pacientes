import React, { Fragment } from 'react';

const Formulario = () => {
	return (
		<Fragment>
			<h2>Crear Cita</h2>

			<form>
				<label htmlFor='nombre-mascota'>Nombre de mascota</label>
				<input id='nombre-mascota' type='text' name='mascota' />
			</form>
		</Fragment>
	);
};

export default Formulario;
