import React from 'react';
import { useEffect, useState } from 'react';
import { crearGenero, obtenerGeneros, borrarGenero } from '../../services/GeneroService';
import Title from '../ui/Title';
import Modal from './Modal';

export default function Genero() {
  const [generos, setGeneros] = useState([]);
  const [genero, setGenero] = useState({
    nombre: '',
    estado: '',
    descripcion: '',
  });

  useEffect(() => {
    listarGeneros();
  }, []);

  const listarGeneros = async () => {
    try {
      const { data } = await obtenerGeneros();
      setGeneros(data);
    } catch (e) {
      console.log(e);
    }
  }

  const guardar = async () => {
    try {
      const response = await crearGenero(genero);
      console.log(response);
      clearForm();
      listarGeneros();
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    console.log(e.target);
    setGenero({
      ...genero,
      [e.target.name]: e.target.value,
    });
  }

  const clearForm = () => {
    setGenero({
      nombre: '',
      estado: '',
      descripcion: '',
    });
  }

  const borrarGeneroPorId = async (e) => {
    try {
      const response = await borrarGenero(e);
      setGeneros(response);
      listarGeneros();
    } catch (e) {
      console.log(e);
    }
  }

  const borrarPorId = (generoId) => {
    borrarGeneroPorId(generoId);
  }

  return (
    <>
      <Title title={'Generos'} />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Genero</th>
              <th scope="col">Estado</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(generos) && generos.length > 0 ? (
              generos.map((genero, index) => (
                <tr key={genero._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{genero.nombre}</td>
                  <td>{genero.estado ? 'Activo' : 'Inactivo'}</td>
                  <td>{genero.descripcion}</td>
                  <td>
                    <button type="button" className="btn btn-secondary">
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      id={genero._id}
                      onClick={() => borrarPorId(genero._id)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  <p>Cargando tabla.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Nuevo Genero
        </button>
        <Modal genero={genero} change={handleChange} guardar={guardar} clearForm={clearForm} />
      </div>
    </>
  );
}
