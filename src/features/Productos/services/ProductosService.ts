import type { ProductoCrearDto } from './../types/ProductoTypes.ts'
// import { api } from 'src/shared/libs/nestAxios.ts'

export class ProductosService {
    static async crearProducto (dto: ProductoCrearDto) {
        // Enviar Request a la API WEB.
        console.log(dto)
        return {}
    }

}
