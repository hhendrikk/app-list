'use strict'

import { combineReducers } from 'redux'
import todos from './todos'
import address from './address'
import visibilityFilter from './visibility-filter'

export default combineReducers({
  address,
  todos,
  visibilityFilter
})
