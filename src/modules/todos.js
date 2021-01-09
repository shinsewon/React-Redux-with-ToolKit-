import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// export const changeInput = (input) => {
//   return {
//     type: CHANGE_INPUT,
//     input,
//   };
// };

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
// export const insert = (text) => {
//   return {
//     type: INSERT,
//     todo: {
//       id: id++,
//       text,
//       done: false,
//     },
//   };
// };
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

// export const toggle = (id) => {
//   return {
//     type: TOGGLE,
//     id,
//   };
// };

export const toggle = createAction(TOGGLE, (id) => id);

// export const remove = (id) => {
//   return {
//     type: REMOVE,
//     id,
//   };
// };

export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 배우기',
      done: true,
    },
    {
      id: 2,
      text: '블로그 쓰기',
      done: false,
    },
  ],
};

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((item) =>
//           item.id === action.id ? { ...item, done: !item.done } : item
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((item) => item.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

const todos = handleActions({
  [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
  [INSERT]: (state, action) => ({
    ...state,
    todos: state.todos.concat(action.payload),
  }),
  [TOGGLE]: (state, action) => ({
    ...state,
    todos: state.todos.map((item) =>
      item.id === action.payload ? { ...todos, done: !item.done } : item
    ),
  }),
  [REMOVE]: (state, action) => ({
    ...state,
    todos: state.todos.filter((item) => item.id !== action.payload),
  }),
  initialState,
});
export default todos;
