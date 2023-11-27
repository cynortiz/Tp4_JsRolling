class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda {
    constructor(tamano = 10) {
      this.contactos = [];
      this.tamanoMaximo = tamano;
    }
  
    aniadirContacto(contacto) {
      if (this.agendaLlena()) {
        console.log("La agenda está llena. No se pueden añadir más contactos.");
      } else {
        this.contactos.push(contacto);
        console.log(`Contacto ${contacto.nombre} añadido correctamente.`);
      }
    }
  
    existeContacto(contacto) {
      return this.contactos.some(c => c.nombre === contacto.nombre);
    }
  
    listarContactos() {
      console.log("Lista de contactos:");
      this.contactos.forEach(contacto => console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`));
    }
  
    buscarContacto(nombre) {
      const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
      if (contactoEncontrado) {
        console.log(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
      } else {
        console.log(`No se encontró el contacto ${nombre}.`);
      }
    }
  
    eliminarContacto(contacto) {
      const indice = this.contactos.findIndex(c => c.nombre === contacto.nombre);
      if (indice !== -1) {
        this.contactos.splice(indice, 1);
        console.log(`Contacto ${contacto.nombre} eliminado correctamente.`);
      } else {
        console.log(`No se encontró el contacto ${contacto.nombre}. No se pudo eliminar.`);
      }
    }
  
    agendaLlena() {
      return this.contactos.length >= this.tamanoMaximo;
    }
  
    huecosLibres() {
      return this.tamanoMaximo - this.contactos.length;
    }
  }
  
  function mostrarMenu() {
    console.log("1. Añadir Contacto");
    console.log("2. Ver si un Contacto Existe");
    console.log("3. Listar Contactos");
    console.log("4. Buscar Contacto por Nombre");
    console.log("5. Eliminar Contacto");
    console.log("6. Ver si la Agenda está Llena");
    console.log("7. Ver Cuántos Huecos Libres Hay");
    console.log("8. Salir");
  }
  

  const agenda = new Agenda();
  
  while (true) {
    mostrarMenu();
    const opcion = parseInt(prompt("Seleccione una opción del menú:"));
  
    switch (opcion) {
      case 1:
        const nombreNuevoContacto = prompt("Ingrese el nombre del nuevo contacto:");
        const telefonoNuevoContacto = prompt("Ingrese el teléfono del nuevo contacto:");
        const nuevoContacto = new Contacto(nombreNuevoContacto, telefonoNuevoContacto);
        agenda.aniadirContacto(nuevoContacto);
        break;
  
      case 2:
        const nombreExistente = prompt("Ingrese el nombre del contacto a verificar:");
        const contactoExistente = new Contacto(nombreExistente, ""); // Solo necesitamos el nombre para comparar
        console.log(agenda.existeContacto(contactoExistente) ? "El contacto existe." : "El contacto no existe.");
        break;
  
      case 3:
        agenda.listarContactos();
        break;
  
      case 4:
        const nombreBusqueda = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBusqueda);
        break;
  
      case 5:
        const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
        const contactoEliminar = new Contacto(nombreEliminar, ""); 
        agenda.eliminarContacto(contactoEliminar);
        break;
  
      case 6:
        console.log(agenda.agendaLlena() ? "La agenda está llena." : "La agenda no está llena.");
        break;
  
      case 7:
        console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
        break;
  
      case 8:
        console.log("Saliendo del programa. ¡Hasta luego!");
        process.exit(0);
  
      default:
        console.log("Opción no válida. Por favor, seleccione una opción del menú.");
    }
  }
  