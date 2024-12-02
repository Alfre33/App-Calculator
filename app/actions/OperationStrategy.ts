export interface OperationStrategy {
    //Defenimos nuestra interface que contiene una funcion que recibe dos parametros de tipo numerico y regresa un numero
    execute(a: number, b: number): number;
  }
  
  
  export class StrategySumar implements OperationStrategy {
    execute(a: number, b: number): number {
    // en esta funcion sumamos numero1 y numero2 y regresamos el resultado
      return a + b;
    }
  }
  
  
  export class StrategyRestar implements OperationStrategy {
    execute(a: number, b: number): number {
         // en esta funcion restamos numero1 y numero2 y regresamos el resultado
      return a - b;
    }
  }
  
  
  export class StrategyMultiplicar implements OperationStrategy {
    execute(a: number, b: number): number {
        // en esta funcion multiplicamos numero1 y numero2 y regresamos el resultado
      return a * b;
    }
  }
  
  
  export class StrategyDivision implements OperationStrategy {
    execute(a: number, b: number): number {
        // en esta funcion dividimos numero1 y numero2 y regresamos el resultado pero antes verfificamos 
        // que el segundo numero (divisor) no sea 0
      if (b === 0) {
        throw new Error("No se puede dividir entre 0");
      }
      return a / b;
    }
  }
  
  
  export class StrategyRaizCuadrada implements OperationStrategy {
    execute(a: number): number {
        // en esta funcion sacamos la raiz de  numero1 regresamos el resultado pero antes revisamos que no sea un numero negativo
      if (a < 0) {
        throw new Error("No se pueden usar numero negativos");
      }
    //   usamos el metodo de js que retorna la raiz cuadrada de un numero
      return Math.sqrt(a);
    }
  }
  
  
  export class StrategyExponencial implements OperationStrategy {
    // en esta funcion sacamos la expoinencial de  numero1 a la numero2
    execute(a: number, b: number): number {
        //usamos el metodo de js que te da la exponencial y requiere un numero base que es a y un numero que sera el exponente en este caso b
      return Math.pow(a, b);
    }
  }

  