class Persona {
    constructor(nombre, edad, sexo, peso, altura, año_nacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.año_nacimiento = año_nacimiento;
    }
  

  
    generaDNI() {
      const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D"];
  
      const numerosDNI = numeros.slice(0, 8).join("");
      const letraDNI = letras[Math.floor(Math.random() * 10)];
  
      return `${numerosDNI}${letraDNI}`;
    }
  
  
    mostrarGeneracion() {
      const año_actual = new Date().getFullYear();
      const diferencia_años = año_actual - this.año_nacimiento;
      let generacion = "";
      let rasgo = "";
  
      if (diferencia_años >= 1946 && diferencia_años <= 1968) {
        generacion = "Baby Boom";
        rasgo = "Paz y explosión demográfica";
      } else if (diferencia_años >= 1969 && diferencia_años <= 1980) {
        generacion = "Generación X";
        rasgo = "Obsesión por el éxito";
      } else if (diferencia_años >= 1981 && diferencia_años <= 1993) {
        generacion = "Generación Y";
        rasgo = "Frustración";
      } else if (diferencia_años >= 1994 && diferencia_años <= 2010) {
        generacion = "Generación Z";
        rasgo = "Irreverencia";
      } else {
        generacion = "Silent Generation";
        rasgo = "Austeridad";
      }
  
      console.log(`La persona ${this.nombre} pertenece a la generación ${generacion}. Su rasgo característico es ${rasgo}`);
    }
  
  
    esMayorDeEdad() {
      const edadActual = new Date().getFullYear();
      const edadMinima = 18;
  
      if (this.edad >= edadMinima) {
        console.log("La persona es mayor de edad");
      } else {
        console.log("La persona es menor de edad");
      }
    }

  
    mostrarDatos() {
      console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        DNI: ${this.generaDNI()}
        Sexo: ${this.sexo}
        Peso: ${this.peso}
        Altura: ${this.altura}
        Año de nacimiento: ${this.año_nacimiento}
      `);
    }
  }
  
  const persona = new Persona("Juan Pérez", 30, "H", 75, 175, 1993);

  persona.generaDNI();
  persona.mostrarGeneracion();
  persona.esMayorDeEdad();
  persona.mostrarDatos();
  