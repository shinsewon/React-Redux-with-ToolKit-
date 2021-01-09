import React from 'react';

export const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </>
  );
};

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  const hadleOnChange = (e) => {
    onChangeInput(e.target.value);
  };

  console.log('todos>>', todos);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={hadleOnChange} />
        <button type="submit">등록</button>
      </form>
      {todos.map((item) => (
        <TodoItem todo={item} key={item.id} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Todos;
