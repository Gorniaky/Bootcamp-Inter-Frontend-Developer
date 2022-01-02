import { useState } from 'react'
import Button from '../button'

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
        <Button onClick={Rem}
          className="btn btn-danger">
          Remover
        </Button>
        <Button onClick={Add}
          className="btn btn-success">
          Adicionar
        </Button>
        <p className="card-text">{value}</p>

      </div>
    </div>
  )
}

export default Card