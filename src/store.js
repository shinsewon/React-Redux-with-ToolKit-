// 1 createStore 생성
const { createStore, compose, applyMiddleware } = require('redux');

const reducer = require('./reducers');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (dispatch) => (action) => {
  //next가 dispatch
  console.log('로깅>>', action);
  dispatch(action);
};

//미들웨어 구성하는 문법(thunkMiddleware 코드)
const thunkMiddleware = (store) => (dispatch) => (action) => {
  //원래 action은 객체이나 , 비동기인 경우 action을 함수로 두겠다.
  typeof action === 'function' ? action(store.dispatch, store.getState) : dispatch(action);
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);

module.exports = { store };
