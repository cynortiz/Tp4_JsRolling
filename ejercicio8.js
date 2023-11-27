class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  
    saludar() {
      console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
  
    despedirse() {
      console.log(`Chau, que andes bien.`);
    }
  }
  
  // Crear dos objetos de la clase Persona
  const persona1 = new Persona("Juan", 25, "Licenciado");
  const persona2 = new Persona("María", 30, "Doctora");
  
  // Llamar a los métodos saludar y despedirse para cada objeto
  persona1.saludar();
  persona1.despedirse();
  
  persona2.saludar();
  persona2.despedirse();
  