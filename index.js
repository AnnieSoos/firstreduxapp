const redux = require('redux')

// function reducer(state, action) {
//   var newState
//   switch (action.type ) {
//     case 'DELETE_ITEM':
//     retur Object.assign({}, state, {shoppingCart: removeItem(state.shoppingCart)}}
// store.setState({greeting: "hi"})
// store.getState()

function adder(state=1, action={}) {
  switch (action.type){
    case 'INCREMENT':
return state + action.value           //business.logic
    default:
    return state
  }
}

function appender(state=[], action={}) {  //new reducer function
  switch (action.type){
    case 'APPEND':
return [...state + action.data]           //business.logic  ...means 3 item from state[array] eg. state[1], state[2], state[3] if 4 dots, 4 element of state [array]....
    default:
    return state
  }
}

const store = redux.createStore(adder)

const reducer= redux.combineReducers({adder, appender})

store.dispatch({type:"INCREMENT", value: 3})

console.log(store.getState())

//state is [array], like a database...
