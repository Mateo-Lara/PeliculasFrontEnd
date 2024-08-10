import React from 'react';
import { useEffect, useState } from 'react';
import { crearTipo, obtenerTipo, borrarTipo } from '../../services/TipoService';
import Title from '../ui/Title';
import Modal from './Modal';

export default function Tipo() {
  const [tipos, setTipos] = useState([]);
  const [tipo, setTipo] = useState({
    nombre: '',
    descripcion: '',
  });

  useEffect(() => {
    listarTipos();
  }, []);

  const listarTipos = async () => {
    try {
      const { data } = await obtenerTipo();
      setTipos(data);
    } catch (e) {
      console.log(e);
    }
  }

  const guardar = async () => {
    try {
      const response = await crearTipo(tipo);
      console.log(response);
      clearForm();
      listarTipos();
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    console.log(e.target);
    setTipo({
      ...tipo,
      [e.target.name]: e.target.value,
    });
  }

  const clearForm = () => {
    setTipo({
      nombre: '',
      descripcion: '',
    });
  }

  const borrarTipoPorId = async (e) => {
    try {
      const response = await borrarTipo(e);
      setTipos(response);
      listarTipos();
    } catch (e) {
      console.log(e);
    }
  }

  const borrarPorId = (directorId) => {
    borrarTipoPorId(directorId);
  }

  return (
    <>
      <Title title={'Tipos'} />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tipo</th>
              <th scope="col">descripcion</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(tipos) && tipos.length > 0 ? (
              tipos.map((tipo, index) => (
                <tr key={tipo._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{tipo.nombre}</td>
                  <td>{tipo.descripcion}</td>
                  <td>
                    <button type="button" className="btn btn-secondary">
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      id={tipo._id}
                      onClick={() => borrarPorId(tipo._id)}
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
          Nuevo tipo
        </button>
        <Modal tipo={tipo} change={handleChange} guardar={guardar} clearForm={clearForm} />
      </div>
    </>
  );
}

