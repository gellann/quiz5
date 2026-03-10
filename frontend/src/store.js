import { combineReducers, legacy_createStore as createStore } from 'redux'

const appReducer = (state = { appName: 'Recipe Ingredient Swapper' }, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const reducer = combineReducers({
  app: appReducer,
})

const initialState = {}

const store = createStore(reducer, initialState)

export default store
