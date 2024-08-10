import {axiosConfig} from '../configuration/AxiosConfig'

    //Obtener todos los generos
    const obtenerProductoras = () => {
        return axiosConfig.get('productora/?estado=true', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    //crear un genero
    const crearProductora = (data) => {
      return axiosConfig.post('productora', data,  {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  //Editar un genero
  const editarProductora = (tipoId, data) => {
    return axiosConfig.put('productora' +tipoId, data,  {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

//Borrar generos
const borrarProductora = (generoId, data) => {
  return axiosConfig.delete('productora/' +generoId, {},  {
  headers: {
    'Content-Type': 'application/json'
  }
})
}

// obtener genero por id
const obtenerProductoraporID = (tipoId) => {
  return axiosConfig.get('productora/' +tipoId, {
  headers: {
    'Content-Type': 'application/json'
  }
})
}


    export{
        obtenerProductoras,
        crearProductora,
        editarProductora,
        obtenerProductoraporID,
        borrarProductora
    }