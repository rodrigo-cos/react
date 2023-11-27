import { useEffect, useState } from "react"
import { Card } from "../components/Card"
export const ComprasPage = () => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
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
                    imagen={producto.imagen}
                    titulo={producto.title}
                    precio={producto.price}
            
                >

                </Card>

            ))}

        </>
    )
}