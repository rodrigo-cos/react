import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./componentes/Navbar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import{CarritoProvider} from "./context/CarritoProvider"

export const CarritoDeComprasApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
            <Navbar></Navbar>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                    <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                    <Route path="/*" element={<Navigate to='/' />}></Route>
                </Routes>
            </div>

            </CarritoProvider>
        </ProductosProvider>
    )
}