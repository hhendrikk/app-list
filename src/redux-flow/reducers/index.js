'use strict'

import reducerTodo from './todos'
import reducerVisibilityFilter from './visibility-filter'

const rootReducer = (state = {}, action) => ({
  todos: reducerTodo(state.todos, action),
  visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
})

export default rootReducer
