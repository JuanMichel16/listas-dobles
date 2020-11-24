export default class Producto {
    constructor(codigo, nombre, descripcion, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.costo = costo;
        this.anterior = null;
        this.siguiente = null;
    }

    total() {
        return this.precio * this.cantidad;
    }
}