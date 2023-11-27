class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    
    setAlto(nuevoAlto) {
        this.alto = nuevoAlto;
    }

    setAncho(nuevoAncho) {
        this.ancho = nuevoAncho;
    }

    mostrarPropiedades() {
        console.log(`Rectángulo: Alto = ${this.alto}, Ancho = ${this.ancho}`);
    }


    calcularPerimetro() {
        return 2 * (this.alto + this.ancho);
    }

    calcularArea() {
        return this.alto * this.ancho;
    }
}


const miRectangulo = new Rectangulo(5, 10);


miRectangulo.mostrarPropiedades();
miRectangulo.setAlto(8);
miRectangulo.setAncho(12);
miRectangulo.mostrarPropiedades();

// Calcular y mostrar perímetro y área
console.log(`Perímetro: ${miRectangulo.calcularPerimetro()}`);
console.log(`Área: ${miRectangulo.calcularArea()}`);
