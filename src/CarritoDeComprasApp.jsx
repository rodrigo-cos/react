import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"

export const CarritoDeComprasApp = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                    <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                    <Route path="/*" element={<Navigate to='/' />}></Route>
                </Routes>
            </div>


        </>
    )
}