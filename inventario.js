export default class Inventario {
    constructor() {
        this.inicio = null;
    }

    agregarProducto(producto) {

        if(this.inicio === null) {
            this.inicio = producto;
        } else {
            let aux = this.inicio;

            while(aux.siguiente != null) {
                aux = aux.siguiente;
            }

            aux.siguiente = producto;
            producto.anterior = aux;
        }

    }


    borrarProducto(codigo) {
            let elementoBorrado;
            let aux = this.inicio;
            if(this.inicio === null){
                alert("No hay productos");
                return;
            }else if(this.inicio.codigo === codigo) {
                elementoBorrado = this.inicio;
                this.inicio = this.inicio.siguiente;
                this.inicio.anterior = null;
                return elementoBorrado;
            }else{
                while(aux.codigo != codigo) {
                    aux = aux.siguiente;
                }
    
                aux.anterior.siguiente = aux.siguiente;
                aux.siguiente.anterior = aux.anterior;
                aux.siguiente = null;
                aux.anterior = null;
                elementoBorrado = aux;
                return elementoBorrado;
            }
    }

    borrarPrimerProducto() {
        let productoEliminado;

        if(this.inicio == null){
            alert("No hay productos");
        }else if(this.inicio.siguiente === null) {
            productoEliminado = this.inicio;
            this.inicio = null

            return productoEliminado;
        } else {
            productoEliminado = this.inicio;
            this.inicio = this.inicio.siguiente
    
            return productoEliminado;
        }
    }

    buscarProducto(codigo) {
        let aux = this.inicio;
        let cont = 1;
        for(let i = 0; i < cont; i++){
            if(aux == null){
                alert("No se encontro el producto");
                return;
            }else if(aux.codigo == codigo){
                return aux;
            }else{
                aux = aux.siguiente;
                cont++;
            }
        }
        
    }


    listarProductos() {
        let aux = this.inicio;

        while(aux) {
            console.log(aux)
            aux = aux.siguiente
        }

    }


    //No funciona!
    listarProductosInvertido() {
        let aux = this.inicio;
        let contador = 0;
        let final;
        let array = [];

        if(aux.siguiente === null) {
            final = aux
            contador++
        } else {
            while(aux.siguiente != null) {
                    aux = aux.siguiente
                    contador++
                    final = aux
            }
        }

        for(let i = contador; i != 1; i--) {
            array.push[final];
            final = final.anterior;
        }

        return array;
    }
}