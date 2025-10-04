export interface ProductoCrearDto {
    nombre: string
    precio: number
}

export interface ProductoActualizarDto {
    nombre: string
    precio: number
}

export interface Producto {
    id: number
    titulo: string
    precio: number
    descripcion: string
    slug: string
    stock: number
}
