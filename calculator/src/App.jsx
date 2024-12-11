import  { useReducer } from 'react';
import Buttons from './component/Buttons';
import Inputs from './component/Inputs';
import Result from './component/Result';

const initialState = {
  a: '',
  b: '',
  result: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_A':
      return { ...state, a: action.payload, error: null };
    case 'SET_B':
      return { ...state, b: action.payload, error: null };
    case 'ADD':
      if (state.a === '' || state.b === '') {
        return { ...state, error: 'Veuillez entrer deux nombres.' };
      }
      return { ...state, result: parseFloat(state.a) + parseFloat(state.b), error: null };
    case 'MULTIPLY':
      if (state.a === '' || state.b === '') {
        return { ...state, error: 'Veuillez entrer deux nombres.' };
      }
      return { ...state, result: parseFloat(state.a) * parseFloat(state.b), error: null };
    case 'RESET':
      return { ...initialState };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Result result={state.result} error={state.error} />
      <Inputs a={state.a} b={state.b} onSetA={(value) => dispatch({ type: 'SET_A', payload: value })} onSetB={(value) => dispatch({ type: 'SET_B', payload: value })} />
      <Buttons onAdd={() => dispatch({ type: 'ADD' })} onMultiply={() => dispatch({ type: 'MULTIPLY' })} onReset={() => dispatch({ type: 'RESET' })} />
    </div>
  );
};

export default App;
