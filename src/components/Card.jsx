import { useState } from "react"
import '../styles/card.css'


export const Card = ({ imagen, titulo, descripcion, precio }) => {
    const [added, setAdded] = useState(false)
    const clickAgregar = () => {
        setAdded(true)
    }
    const clickQuitar = () => {
        setAdded(false)
    }
    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido"></div>
            <h3 className="tarjeta-titulo">{titulo}</h3>
            <p className="tarjeta-descripcioon">{descripcion}</p>
            <p className="tarjeta-precio">{precio}</p>
            {added
                ? <button
                    type="button"
                    className="boton-quitar"
                    onClick={clickQuitar}
                >
                    Quitar carrito
                </button>
                : <button
                type="button"
                className="boton-agregar"
                onClick={clickAgregar}
                >
                    Agregar Carrito
                </button>

            }
        </div>

    )
}