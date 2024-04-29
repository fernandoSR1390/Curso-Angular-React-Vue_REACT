import React, { useState } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [bio, setBio] = useState('');
  const [generoMascuino, setGeneroMascuino] = useState('');
  const [generoFemenino, setGeneroFemenino] = useState('');
  const [generoOtro, setGeneroOtro] = useState('');
  
  const recibirFormulario = (e) => {
    e.preventDefault();
    let genero = '';
    if (generoMascuino) {
      genero=generoMascuino;
    }
    if (generoFemenino) {
      genero=generoFemenino;
    }
    if (generoOtro) {
      genero=generoOtro;
    }
    let formArray = {
      nombre: nombre,
      apellido: apellido,
      biografia: bio,
      genero: genero
    };

    console.log(formArray);
  }
  return (
    <div id='formulario'>
        <Slider title="Formulario" size="slider-small"/>
        <div className='center'>
            <div id='content'>
            <h1 className="subheader">Formulario</h1>
              <form className="mid-form" onSubmit={recibirFormulario}>
                  <div className="form-group">
                      <label htmlFor="nombre">Nombre</label>
                      <input type="text" name="nombre" onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="apellidos">Apellidos</label>
                      <input type="text" name="apellidos" onChange={(e)=>setApellido(e.target.value)} value={apellido}/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="bio">Biografia</label>
                      <textarea name="bio" onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
                  </div>

                  <div className="form-group radibutton">
                      <input type="radio" name="genero" value="masculino" onChange={(e)=>setGeneroMascuino(e.target.value)} />Hombre
                      <input type="radio" name="genero" value="mujer" onChange={(e)=>setGeneroFemenino(e.target.value)} />Mujer
                      <input type="radio" name="genero" value="otro" onChange={(e)=>setGeneroOtro(e.target.value)} />Otro
                  </div>

                  <div className="clearfix"></div>
                  <input type="submit" value="Enviar" className="btn btn-success" />
              </form>
            </div>
            <Sidebar blog={false}/>
        </div>
    </div>
  )
}

export default Formulario