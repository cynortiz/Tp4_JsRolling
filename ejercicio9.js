class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      console.log("Sonido genérico de un animal");
    }
  }
  
  class Perro extends Animal {
    emitirSonido() {
      console.log("Guau, guau");
    }
  }
  
  class Gato extends Animal {
    emitirSonido() {
      console.log("Miau, miau");
    }
  }
  

  const miPerro = new Perro("Buddy", 3);
  const miGato = new Gato("Whiskers", 2);
  

  miPerro.emitirSonido();
  miGato.emitirSonido();
  