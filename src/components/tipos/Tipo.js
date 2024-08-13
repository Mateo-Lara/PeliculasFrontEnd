import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { crearTipo, obtenerTipo, borrarTipo } from '../../services/TipoService';
import Title from '../ui/Title';
import Modal from './Modal';

export default function Tipo() {
  const [tipos, setTipos] = useState([]);
  const [tipo, setTipo] = useState({
    nombre: '',
    descripcion: '',
  });

  const navigate = useNavigate();

  const listarTipos = useCallback(async () => {
    try {
      const { data } = await obtenerTipo();
      setTipos(data);
    } catch (e) {
      console.log(e);
    }
  }, []); 

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/login');
    } else {
      listarTipos();
    }
  }, [navigate, listarTipos]); 

  const guardar = async () => {
    try {
      const response = await crearTipo(tipo);
      console.log(response);
      clearForm();
      listarTipos();
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setTipo({
      ...tipo,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setTipo({
      nombre: '',
      descripcion: '',
    });
  };

  const borrarTipoPorId = async (id) => {
    try {
      const response = await borrarTipo(id);
      setTipos(response);
      listarTipos();
    } catch (e) {
      console.log(e);
    }
  };

  const borrarPorId = (tipoId) => {
    borrarTipoPorId(tipoId);
  };

  return (
    <>
      <Title title={'Tipos'} />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tipo</th>
              <th scope="col">Descripción</th>
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
                <td colSpan="4">
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
