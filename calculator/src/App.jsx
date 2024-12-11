import React, { useReducer } from 'react';
import Display from './component/Display';
import NumberButtons from './component/NumberButtons';
import OperatorButtons from './component/OperatorButtons';
import './App.css';

const initialState = {
  input: '0',
  result: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.payload, error: null };
    case 'EVALUATE':
      try {
        const result = eval(state.input.replace('x', '*').replace('÷', '/'));
        return { ...state, result, input: result.toString(), error: null };
      } catch (e) {
        return { ...state, error: 'Erreur de calcul.' };
      }
    case 'RESET':
      return { ...initialState };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (number) => {
    let newInput = state.input;
    if (newInput === '0' && number === 0) {
      newInput = '0';
    } else if (newInput === '0' && number !== 0) {
      newInput = number.toString();
    } else {
      newInput += number.toString();
    }
    dispatch({ type: 'SET_INPUT', payload: newInput });
  };

  const handleOperatorClick = (operator) => {
    if (operator === 'reset') {
      dispatch({ type: 'RESET' });
    } else if (operator === '=') {
      dispatch({ type: 'EVALUATE' });
    } else {
      const lastChar = state.input[state.input.length - 1];
      if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷') {
        // Replace the last operator with the new one
        dispatch({ type: 'SET_INPUT', payload: state.input.slice(0, -1) + operator });
      } else {
        dispatch({ type: 'SET_INPUT', payload: state.input + operator });
      }
    }
  };

  return (
    <div className="calculator">
      <Display input={state.input} />
      <NumberButtons onNumberClick={handleNumberClick} />
      <OperatorButtons onOperatorClick={handleOperatorClick} />
      {state.error && <div className="error">{state.error}</div>}
    </div>
  );
};

export default App;
