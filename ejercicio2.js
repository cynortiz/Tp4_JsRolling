const cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar: function () {
        const cantidad = parseFloat(prompt("Ingrese la cantidad a ingresar:"));

        if (!isNaN(cantidad) && cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Se ingresaron ${cantidad} a la cuenta. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("Ingrese un monto válido mayor a 0.");
        }
    },

    extraer: function () {
        const cantidad = parseFloat(prompt("Ingrese la cantidad a extraer:"));

        if (!isNaN(cantidad) && cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Se extrajeron ${cantidad} de la cuenta. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("Ingrese un monto válido mayor a 0 y que no exceda el saldo disponible.");
        }
    },

    informar: function () {
        console.log(`Titular: ${this.titular}, Saldo actual: ${this.saldo}`);
    }
};

// Mostrar la descripción inicial del estado de la cuenta
cuenta.informar();

// Ingresar dinero a la cuenta
cuenta.ingresar();

// Extraer dinero de la cuenta
cuenta.extraer();

// Mostrar la descripción actualizada del estado de la cuenta
cuenta.informar();
