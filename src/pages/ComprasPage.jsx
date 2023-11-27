import { useEffect, useState } from "react"
import { Card } from "../components/Card"
export const ComprasPage = () => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/products')
        const data = await response.json()
        console.log(data)
        setProductos(data)
    }

    useEffect(() => {
        fetchProductos()
    }, [])

    return (
        <>
            <h1>Compras:</h1>
            <hr />
            {productos.map(producto => (
                <Card
                    
                    imagen={producto.images}
                    titulo={producto.title}
                    descripcion={producto.description}
                    precio={producto.price}
                   
                >

                </Card>

            ))}

        </>
    )
}