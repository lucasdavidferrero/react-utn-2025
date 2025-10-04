import { useEffect, useState } from 'react'
import { ProductosService } from './../services/ProductosService'
import type { Producto } from "./../types/ProductoTypes"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router';


export default function ProductosPage() {
    const [productos, setProductos] = useState<Producto[]>()
    useEffect(() => {
        async function fn () {
            const resultado = await ProductosService.obtenerProductos()
            setProductos(resultado)
        }
        fn()
    }, [])
    const navigate = useNavigate();
    function handleButtonNavClickCrear () {
        navigate("crear")
    }
    function handleButtonNavClickEditar () {
        navigate("editar")
    }
    function handleButtonNavClickEliminar () {
        navigate("eliminar")
    }

    return (
        <>
            <div>
                <Box sx={{ width: '100%' }}>
                    <ButtonGroup variant="outlined">
                        <Button onClick={handleButtonNavClickCrear}>Crear</Button>
                        <Button onClick={handleButtonNavClickEditar}>Editar</Button>
                        <Button onClick={handleButtonNavClickEliminar}>Eliminar</Button>
                    </ButtonGroup>
                </Box>
            </div>
            <h2>Productos</h2>
            <div>
                {productos && productos.map(p => (
                    <div>
                        <p>{p.id}</p>
                        <p>{p.titulo}</p>
                        <p>{p.precio}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
