import { useEffect, useState } from 'react'
import { type Comentario } from './../types/ComentarioTypes.ts'
import { ComentariosService } from './../services/ComentariosService.ts'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ComentariosPage() {
    const [datos, setDatos] = useState<Comentario[]>([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const comentarios = await ComentariosService.obtenerComentarios()
                setDatos(comentarios)
            } catch (e) {
                if (e instanceof Error) setError(e.message);
            } finally {
                setCargando(false);
            }
        }
        fetchData()
    }, []);

    if (cargando) {
        return <div>Cargando datos...</div>;
    }

    if (error) {
        return <div>Error al cargar los datos: {error}</div>;
    }

    return (
        <div>
            <h2>Comentarios</h2>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>ID Publicación</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Mensaje</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datos.map((fila) => (
                                <TableRow
                                    key={fila.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {fila.id}
                                    </TableCell>
                                    <TableCell>{fila.postId}</TableCell>
                                    <TableCell>{fila.name}</TableCell>
                                    <TableCell>{fila.email}</TableCell>
                                    <TableCell>{fila.body}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
