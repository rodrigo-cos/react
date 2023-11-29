
import { useState } from "react";

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [apeliido, setApellido] = useState('');
    const [password, sePassword] = useState('');

    const imprimirDatos = () => {
        console.log(nombre, apeliido, password);
    }
    
    return (
        <>
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" placeholder="pepe" required/>
            </div>
            <div class="mb-3">
                <label for="apellido" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="apellido" placeholder="perez" required/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">password</label>
                <input type="text" class="form-control" id="password" placeholder="contraseña" required/>
            </div>
        </>

    )
}

export default Formulario;