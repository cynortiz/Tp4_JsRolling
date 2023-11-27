class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos() {
        console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}

const producto1 = new Producto("001", "Producto A", 20.99);
const producto2 = new Producto("002", "Producto B", 15.50);
const producto3 = new Producto("003", "Producto C", 30.75);


const arrayProductos = [producto1, producto2, producto3];


arrayProductos.forEach(producto => producto.imprimeDatos());

