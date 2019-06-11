'use strict'

import { SET_VISIBILITY_FILTER } from 'reducers/visibility-filter/actions'

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter
  }
})
