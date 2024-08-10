import {axiosConfig} from '../configuration/AxiosConfig'

    //Obtener todos los generos
    const obtenerTipo = () => {
        return axiosConfig.get('tipo/?estado=true', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    //crear un genero
    const crearTipo = (data) => {
      return axiosConfig.post('tipo', data,  {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  //Editar un genero
  const editarTipo = (tipoId, data) => {
    return axiosConfig.put('tipo' +tipoId, data,  {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

//Borrar generos
const borrarTipo = (TipoId, data) => {
  return axiosConfig.delete('tipo/' +TipoId, {},  {
  headers: {
    'Content-Type': 'application/json'
  }
})
}

// obtener genero por id
const obtenerTipoporID = (tipoId) => {
  return axiosConfig.get('tipo/' +tipoId, {
  headers: {
    'Content-Type': 'application/json'
  }
})
}


    export{
        obtenerTipo,
        crearTipo,
        editarTipo,
        obtenerTipoporID,
        borrarTipo
    }