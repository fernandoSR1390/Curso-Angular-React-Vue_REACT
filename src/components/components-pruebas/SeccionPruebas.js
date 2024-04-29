
import { useState } from 'react';
import MiComponenteClasico from './MiComponenteClasico';
import MiComponenteEstatico from './MiComponenteEstatico';
import MiComponenteNormal from './MiComponenteNormal';


function SeccionPruebas() {
    const [contador, setContador] = useState(0);

    const sumar = ()=>{
        if (contador<12) {
            setContador(contador+1);
        }
    }

    const restar = ()=>{
        if (contador>0) {
            setContador(contador-1);
        }
    }

    return (
        <section id='content'>
            <h2 className='subheader'>Ultimos articulos (otro)</h2>
            <hr />
            <h2 className='subheader'>Funciones y JSX basico</h2>
            <hr />
            <h2 className='subheader'>Componentes</h2>
            <section className='componentes'>
                <MiComponenteClasico />
                <MiComponenteEstatico />
                <MiComponenteNormal />
            </section>
            <hr />
            <h2 className='subheader'>Estados</h2>
            <p>Contador: {contador}</p>
            <p>
                <input type='button' value='Sumar' onClick={()=>sumar()} />
                <input type='button' value='Restar' onClick={()=>restar()} />
            </p>
        </section>
    );
    
}

export default SeccionPruebas;