import { OperationStrategy } from "./OperationStrategy";

export class Calculator {
  //creamos la varible que almacenara la estrategia o funcion matematica y  la iniciamos como null
  private strategy: OperationStrategy | null = null;

  //asignamos nuestra estrategia seleccionada
  setStrategy(strategy: OperationStrategy) {
    this.strategy = strategy;
  }

  //ejecutamos la funcion que defiunimos en nuestra interface OperationStrategy pero antes revisamos que tengamos una estrategia
  //si tenemos la estrategia ejecutamos la estrategia y su metodo execute
  execute(a: number, b?: number): number {
    if (!this.strategy) {
      throw new Error("No se eligio ninguna estrategia ");
    }

    // Llamada a la estrategia
    return this.strategy.execute(a, b ?? 0);
  }
}
