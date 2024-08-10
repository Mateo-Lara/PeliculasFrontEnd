import {axiosConfig} from '../configuration/AxiosConfig'

    //Obtener todos los generos
    const obtenerGeneros = () => {
        return axiosConfig.get('genero/?estado=true', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    //crear un genero
    const crearGenero = (data) => {
      return axiosConfig.post('genero', data,  {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  //Editar un genero
  const editarGenero = (tipoId, data) => {
    return axiosConfig.put('genero' +tipoId, data,  {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

//Borrar generos
const borrarGenero = (generoId, data) => {
  return axiosConfig.delete('genero/' +generoId, {},  {
  headers: {
    'Content-Type': 'application/json'
  }
})
}

// obtener genero por id
const obtenerGeneropoID = (tipoId) => {
  return axiosConfig.get('genero/' +tipoId, {
  headers: {
    'Content-Type': 'application/json'
  }
})
}


    export{
        obtenerGeneros,
        crearGenero,
        editarGenero,
        obtenerGeneropoID,
        borrarGenero
    }