import React from 'react'

export const CarritoPage = () => {
    return (
        <>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">cantidad</th>
                    <th scope="col">eliminar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Nombre</th>
                    <td>Precio</td>
                    <td>cantidad</td>
                    <td>eliminar</td>
                </tr>
            </tbody>
        </table>
        <div className='d-grip gap-2'>
            <button className='btn btn-primary'>Comprar</button>
        </div>
        </>
    )
}