import '../styles/FormularioRegistro.css';
import React, { useState } from 'react';

import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useSearchParams } from 'react-router-dom';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const FormularioRegistro = () => {
  const initialValues = {
    username: '',
    nombre: '',
    apellido: '',
    nacionalidad: '',
    email: '',
    fecha_nac: '',
    password: '',
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username || values.username.length < 3) {
      errors.username = 'Debe contener al menos 3 caracteres  🡣';
    }

    if (!values.nombre || values.nombre.length < 3) {
      errors.nombre = 'Debe contener al menos 3 caracteres  🡣';
    }

    if (!values.apellido || values.apellido.length < 3) {
      errors.apellido = 'Debe contener al menos 3 caracteres  🡣';
    }

    if (!values.nacionalidad || values.nacionalidad.length < 3) {
      errors.nacionalidad = 'Debe contener al menos 3 caracteres  🡣';
    }

    if (!values.email || !emailRegex.test(values.email)) {
      errors.email = 'Por favor, ingresa una dirección de correo electrónico válida.';
    }

    if (!values.password || values.password.length < 4) {
      errors.password = 'Debe contener al menos 4 caracteres  🡣';
    }

    return errors;
  };

  const onSubmit = async (values) => {
    try {
      const formattedValues = {
        ...values,
        fechaNacimiento: new Date(values.fecha_nac).toISOString(),
      };
  
      const response = await fetch('http://localhost:3003/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedValues),
      });
  
      if (response.ok) {  
        // alert('Registro exitoso')
        setLoginExitoso(true)

      } else {
        alert('El usuario ya existe o hubo un error en el registro');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };
  
const [loginExitoso, setLoginExitoso] = useState(false)
  return (
    <section>
      <section className="registro_inicio">
        <Navbar />
        <section className="form">
          {loginExitoso &&(
            <div className='registroExitoso'>
              <p className=''> ¡Registro Exitoso! Ahora eres parte de nuestra comunidad, donde podrás explorar y compartir información 
fascinante sobre la Antártida. Inicia sesión ahora para explorar la comunidad de Cody.</p>
            </div>
          )}
          <div className="titulo">
            <h3>Formulario de Registro</h3>
          </div>
          <div className="texto">
            <h4>Para crear tu cuenta te pediremos algunos datos</h4>
          </div>

          <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit} autoComplete="off">
            <Form>
              <div className="formContenedor">
                <div className="d-flex flex-column divInput">
                  <Field type="text" name="username" className="control" placeholder="Usuario"/>
                  <ErrorMessage name="username" component="div" className="error-message" />
                </div>

                <div className="d-flex flex-column divInput">
                  <Field type="text" name="nombre" className="control" placeholder="Nombre" />
                  <ErrorMessage name="nombre" component="div" className="error-message" />
                </div>
              </div>

              <div className="formContenedor">
                <div className="d-flex flex-column divInput">
                  <Field type="text" name="apellido" className="control" placeholder="Apellido"/>
                  <ErrorMessage name="apellido" component="div" className="error-message" />
                </div>
                <div className="d-flex flex-column divInput">
                  <Field type="text" name="nacionalidad" className="control" placeholder="Nacionalidad" />
                  <ErrorMessage name="nacionalidad" component="div" className="error-message" />
                </div>
              </div>

              <div className="formContenedor">
                <div className="d-flex flex-column divInput">
                  <Field type="text" name="email" className="control" placeholder="Correo Electrónico"/>
                  <ErrorMessage name="email" component="div" className="error-message" />
                </div>

                <div className="d-flex flex-column divInput">
                  <Field type="date" name="fecha_nac" className="control" />
                </div>
              </div>

              <div className="formContenedor">
                <div className="d-flex flex-column divInput2">
                  <Field type="text" name="password" className="controlpassword" placeholder="Contraseña" />
                  <ErrorMessage name="password" component="div" className="error-message" />
                </div>
               
              </div>
              <div className='btn-registrar'> 
                <button id="register_btn" type="submit">
                  Quiero Registrarme
                </button>
                </div>
            </Form>
          </Formik>
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default FormularioRegistro;
