import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import subtract = Animated.subtract;
import multiply = Animated.multiply;
import divide = Animated.divide;

enum Operation{
  add='+',
  subtract='-',
  multiply='*',
  divide='÷',
}

export const useCalculator = () => {
  //

  //hook
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperation = useRef<Operation>();
  const [formula, setFormula ] = useState('');
  const clean = () => {
   setNumber('0');
   setPrevNumber('0');
   lastOperation.current = undefined;
   setFormula('');
  };

  const deleOperation = () => {
   let  currentSing = '';
   let  temporalNumber :string = number;

   if(number.includes('-')){
     currentSing = '-';
     temporalNumber = number.substring(1);
   }

   if(temporalNumber.length> 1){
     return setNumber(currentSing + temporalNumber.slice(0, -1));
   }

   setNumber('0');
  };

  const toggleSing = () => {
    if (number.includes('-')){
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {

    if (number.includes('.') && numberString === '.') {
      return ;
    }

    if (number.startsWith('0') || number.startsWith('-0')){
      // Punto decimal


      if (numberString ==='.'){
        return setNumber(number + numberString);
      }
      // Evaluar si es otro cero y no hay un punto


      if (numberString === '0' && number.includes('.')){
        return setNumber(number + numberString);
      }
      // Evaluar si es diferente de cero, no hay punto, y si es el primer Numero


      if (numberString !== '0' && !number.includes('.')){
        return setNumber(numberString);
      }
      // Evitar 0000000


      if (numberString ==='0'&& !number.includes('.')){
        return ;
      }
      return setNumber(number + numberString);
    }
   setNumber(number + numberString);
  };

  const setlastNumber = () =>{
    calculateResult();

    if (number.endsWith('.')){
      setNumber(number.slice(0,-1));
    }else {
      setPrevNumber(number);
    }
    setNumber('0')
  };

  //Operaciones Aritmeticas
  const divideOperation = () => {
    setlastNumber();
    lastOperation.current = Operation.divide;
  };

  const multuplyOperation = () => {
    setlastNumber();
    lastOperation.current = Operation.multiply;
  };

  const addOperation = () => {
    setlastNumber();
    lastOperation.current = Operation.add;
  };

  const subtractOperation = () => {
    setlastNumber();
    lastOperation.current = Operation.subtract;
  };

  const calculateResult = () =>{
    const result =calculateSubResult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    setPrevNumber('0');
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if ( isNaN( num2 )) return num1;

    switch (operation) {

      case Operation.add:
        return num1 + num2;

      case Operation.subtract:
        return num1 - num2;

      case Operation.multiply:
        return num1 * num2;

      case Operation.divide:
        return num1 / num2;

      default:
        throw new Error('Invalid Operation');
    }
  };

  useEffect(() => {
    if (lastOperation.current){
    const firstFormulaPart  = formula.split(' ').at(0);
    setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    }else {
      setFormula(number);
    }
  }, [number]);


  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  //Return

  return {
    number,
    prevNumber,
    setlastNumber,
    formula,

    buildNumber,
    toggleSing,
    clean,
    deleOperation,
    divideOperation,
    multuplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,

  };
};
