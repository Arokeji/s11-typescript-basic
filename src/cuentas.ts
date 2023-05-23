class Cuenta {
  private titular: string;
  private cantidad: number;

  constructor(titular: string, cantidad = 0) {
    this.titular = titular;
    this.cantidad = cantidad;
  }

  public ingresar(cantidadIngresar: number): void {
    if (cantidadIngresar > 0) {
      this.cantidad += cantidadIngresar;
    } else {
      console.error(`ERROR: La cantidad "${cantidadIngresar}" no es válida. \nNo puede ser un valor negativo.`);
    }
  }

  public retirar (cantidadRetirar: number): void {
    if (cantidadRetirar > 0) {
      this.cantidad -= cantidadRetirar;
    } else {
      console.error(`ERROR: La cantidad "${cantidadRetirar}" no es válida. \nNo puede ser un valor negativo.`);
    }
  }

  public mostrar (): void {
    console.log(`-----------------\nDatos de la cuenta:\nTitular: ${this.titular}\nCantidad: ${this.cantidad}.\n-----------------`);
  }
}

const cuenta1: Cuenta = new Cuenta("Pedro", 2000);
const cuenta2: Cuenta = new Cuenta("Juan");

// Las cuentas se inician con los valores del constructor
cuenta1.mostrar();
cuenta2.mostrar();

// Ingresamos 300€ a la cuenta 1
cuenta1.ingresar(300);
cuenta1.mostrar();

// Ingresamos un número negativo a la cuenta 2 haciendo que salte un error por consola
cuenta2.ingresar(-200);
cuenta2.mostrar();

// Retiramos 500€ de la cuenta 1 y la vemos tras la operación
cuenta1.retirar(500);
cuenta1.mostrar();

// Retiramos una cantidad mayor a la que hay en la cuenta por lo que se queda a 0.
cuenta1.retirar(4000);
cuenta1.mostrar();
