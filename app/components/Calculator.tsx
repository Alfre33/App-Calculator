"use client";

import React, { useState } from "react";
import {
  StrategySumar,
  StrategyDivision,
  StrategyExponencial,
  StrategyMultiplicar,
  StrategyRaizCuadrada,
  StrategyRestar,
} from "../actions/OperationStrategy";
import { Calculator } from "../actions/Calculator";

// Creamos un objeto con las diferentes estrategias

const strategiesMap = {
  suma: new StrategySumar(),
  resta: new StrategyRestar(),
  multiplicacion: new StrategyMultiplicar(),
  division: new StrategyDivision(),
  raiz: new StrategyRaizCuadrada(),
  exponencial: new StrategyExponencial(),
};

const AppCalculator = () => {
  const [a, setA] = useState<number >(0);  //variable que guarda numero1
  const [b, setB] = useState<number>(0); //variable que guarda numero2
  const [result, setResult] = useState<number | null>(null);  //variable que guarda el resultado

  const calculator = new Calculator(); //Creamos una calculadora ,la cual permitira usar las difrentes estrategias de operaciones matematicas

  const handleCalculate = (strategy: keyof typeof strategiesMap) => { //en los parametros solo obtenemos las keys de nuestro objeto que creamos 
    calculator.setStrategy(strategiesMap[strategy]); //asignamos la estrategia a la calculadora de la lista de nuestro objeto strategiesMap en el indice que mandamos en el parametro

    if (strategy === "raiz") { //validacion si es raiz cuadrada solo recibimos numero a
      setResult(calculator.execute(a));
    } else {
      setResult(calculator.execute(a, b)); //ejecutamos la estrategia que se recibe en los parametros con los numeros que se pasaron en a y b
    }
  };

  return (
    <div className="w-80 mt-5 ">
      <h2 className="text-2xl">Calculadora</h2>
      <div className="w-4/5 my-5 flex flex-col">
        <label>Ingresa el primer numero</label>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(Number(e.target.value))} //se encarga de actualizar el valor de a 
          placeholder="Número A"
          className="mb-5 bg-gray-900 border-2 border-white rounded-lg focus:border-gray-700"
        />
        <label>Ingresa el segundo numero</label>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
          placeholder="Número B"
          disabled={false}
          className="mb-5 bg-gray-900 border-2 border-white rounded-lg focus:border-gray-700"
        />
      </div>
      <div className="grid grid-cols-2 my-5 gap-3">
        <button
          onClick={() => handleCalculate("suma")} //ejecuta la funcion que hace el calculo y envia el parametro (estrategia)
          className="p-4 bg-gray-400 rounded-lg hover:bg-gray-600"
        >
          Sumar
        </button>
        <button
          onClick={() => handleCalculate("resta")}
          className="p-4 bg-gray-400 rounded-lg hover:bg-gray-600"
        >
          Restar
        </button>
        <button
          onClick={() => handleCalculate("multiplicacion")}
          className="p-4 bg-gray-400 rounded-lg hover:bg-gray-600"
        >
          Multiplicar
        </button>
        <button
          onClick={() => handleCalculate("division")}
          className="p-4 bg-gray-400 rounded-lg hover:bg-gray-600"
        >
          Dividir
        </button>
        <button
          onClick={() => handleCalculate("raiz")}
          className="p-4 bg-gray-400 rounded-lg hover:bg-gray-600"
        >
          Raíz Cuadrada
        </button>
        <button
          onClick={() => handleCalculate("exponencial")}
          className="p-4 bg-gray-400 rounded-lg hover:bg-gray-600"
        >
          Exponencial
        </button>
      </div>
      <div>
        <h3>
          Resultado: {result !== null ? result : "debes ingresar algun numero"}
        </h3>
      </div>
    </div>
  );
};

export default AppCalculator;
