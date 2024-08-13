import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { crearProductora, obtenerProductoras, borrarProductora } from '../../services/ProductoraService';
import Title from '../ui/Title';
import Modal from './Modal';

export default function Productora() {
  const [productoras, setProductoras] = useState([]);
  const [productora, setProductora] = useState({
    nombreProductora: '',
    estado: '',
    slogan: '',
    descripcion: '',
  });

  const navigate = useNavigate();

  const listarProductoras = useCallback(async () => {
    try {
      const { data } = await obtenerProductoras();
      setProductoras(data);
    } catch (e) {
      console.log(e);
    }
  }, []); 

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/login');
    } else {
      listarProductoras();
    }
  }, [navigate, listarProductoras]); 

  const guardar = async () => {
    try {
      const response = await crearProductora(productora);
      console.log(response);
      clearForm();
      listarProductoras();
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setProductora({
      ...productora,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setProductora({
      nombreProductora: '',
      estado: '',
      slogan: '',
      descripcion: '',
    });
  };

  const borrarProductoraPorId = async (id) => {
    try {
      const response = await borrarProductora(id);
      setProductoras(response);
      listarProductoras();
    } catch (e) {
      console.log(e);
    }
  };

  const borrarPorId = (productoraId) => {
    borrarProductoraPorId(productoraId);
  };

  return (
    <>
      <Title title={'Productoras'} />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Productora</th>
              <th scope="col">Estado</th>
              <th scope="col">Slogan</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(productoras) && productoras.length > 0 ? (
              productoras.map((productora, index) => (
                <tr key={productora._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{productora.nombreProductora}</td>
                  <td>{productora.estado ? 'Activo' : 'Inactivo'}</td>
                  <td>{productora.slogan}</td>
                  <td>{productora.descripcion}</td>
                  <td>
                    <button type="button" className="btn btn-secondary">
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      id={productora._id}
                      onClick={() => borrarPorId(productora._id)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">
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
          Nueva productora
        </button>
        <Modal productora={productora} change={handleChange} guardar={guardar} clearForm={clearForm} />
      </div>
    </>
  );
}
