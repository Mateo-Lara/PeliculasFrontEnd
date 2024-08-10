import React from 'react'

export default function modal({
  productora,
  change,
  guardar,
  clearForm 
}) {
  

  const handleChange = (e) =>{
    change(e)
  }

  const guardarGenero = (e) => {
    e.preventDefault()
    guardar()
  }

  const clear = () =>{
    clearForm()
  }

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva productora</h1>
        <button 
          type="button" 
          className="btn-close" 
          data-bs-dismiss="modal" 
          aria-label="Close"
          onClick={clear}
        >

        </button>
      </div>
      <div className="modal-body">
        <form onSubmit={guardarGenero}>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Nombre:</label>
            <input
             type="text" 
             className="form-control" 
             id="recipient-name"
             onChange={handleChange}
             value={productora.nombreProductora}
             name='nombreProductora'
             />
            </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">estado:</label>
            <textarea 
              className="form-control" 
              id="message-text"
              onChange={handleChange}
              value={productora.estado}
              name='estado'
            > 

            </textarea>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">slogan:</label>
            <textarea 
              className="form-control" 
              id="message-text"
              onChange={handleChange}
              value={productora.slogan}
              name='slogan'
            > 

            </textarea>
          </div>             
          <div className="mb-3">
            <label for="message-text" className="col-form-label">descripcion:</label>
            <textarea 
              className="form-control" 
              id="message-text"
              onChange={handleChange}
              value={productora.descripcion}
              name='descripcion'
            >

            </textarea>
          </div>
          <div className="modal-footer">
        <button 
          type="button" 
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={clear}
          >
           Cerrar
          </button>
        <button 
        type="submit" 
        className="btn btn-primary"
        disabled={productora.nombreProductora.length === 1}
        >
          Enviar
        </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
