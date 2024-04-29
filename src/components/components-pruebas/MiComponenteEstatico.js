import React, { useState } from 'react';

const MiComponenteEstatico = () => {
    const [prueba, setPrueba] = useState('Prueba componente');
    return (
        <>
            <h1>Hola, desde mi componente estatico{prueba}</h1>
        </>
    );
}

export default MiComponenteEstatico;