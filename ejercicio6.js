class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    get ISBN() {
      return this._ISBN;
    }
  
    set ISBN(ISBN) {
      this._ISBN = ISBN;
    }
  
    get titulo() {
      return this._titulo;
    }
  
    set titulo(titulo) {
      this._titulo = titulo;
    }
  
    get autor() {
      return this._autor;
    }
  
    set autor(autor) {
      this._autor = autor;
    }
  
    get numPaginas() {
      return this._numPaginas;
    }
  
    set numPaginas(numPaginas) {
      this._numPaginas = numPaginas;
    }
  

    mostrarLibro() {
      console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas`);
    }
  }
  

  const libro1 = new Libro("123456789", "Don Quijote", "Miguel de Cervantes", 500);
  const libro2 = new Libro("987654321", "1984", "George Orwell", 300);
  

  libro1.mostrarLibro();
  libro2.mostrarLibro();
 
  if (libro1.numPaginas > libro2.numPaginas) {
    console.log(`${libro1.titulo} tiene más páginas que ${libro2.titulo}`);
  } else if (libro1.numPaginas < libro2.numPaginas) {
    console.log(`${libro2.titulo} tiene más páginas que ${libro1.titulo}`);
  } else {
    console.log(`${libro1.titulo} y ${libro2.titulo} tienen la misma cantidad de páginas`);
  }
  