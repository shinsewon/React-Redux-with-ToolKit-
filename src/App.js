import React, { useCallback } from 'react';
// import Counter from './components/Counter';
// import Todos from './components/Todos';
import CountContainer from './containers/CountContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CountContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
