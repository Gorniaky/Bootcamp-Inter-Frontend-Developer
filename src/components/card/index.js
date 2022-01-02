import { useState } from 'react'

const Card = () => {

  const [value, setValue] = useState(0)

  function Add() {
    setValue(value + 1)
  }

  function Rem() {
    setValue(value - 1)
  }

  return (
    <div className="card">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <button
          type="button"
          className="btn btn-danger"
          onClick={Rem}>
          Remover
        </button>
        <button type="button"
          className="btn btn-success"
          onClick={Add}>
          Adicionar
        </button>
        <p className="card-text">{value}</p>

      </div>
    </div>
  )
}

export default Card