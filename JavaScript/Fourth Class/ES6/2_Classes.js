class Persona{
  constructor(name, lastName, id){
    this.name = name;
    this.lastName = lastName;
    this.id = id;
  }

  printName() {
    console.log('My name is', this.name);
  };
}

class Usuario extends Persona{
  constructor(email, password, name, lastName, id){
    super(name, lastName, id);

    this.email = email;
    this.password = password;
  }

  printUser() {
    console.log(this);
  }
}

const Andres = new Usuario('email', 'pass', 'Andres', 'Rojas', 12345);

Andres.printName();
Andres.printUser();
