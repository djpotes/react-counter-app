import PropTypes from 'prop-types';
// FC
import React from 'react';

const PrimeraApp = ({saludo, subtitulo}) => {
    return (
        <>
            <div>{saludo}</div>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
    <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Mi primera aplicación'
}

export default PrimeraApp;