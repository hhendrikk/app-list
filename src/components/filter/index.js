'use strict'

import React from 'react'
import { connect } from 'react-redux'

import * as actions from 'reducers/visibility-filter/actions'
import { setVisibilityFilter } from 'reducers/visibility-filter/action-creators'
import LinkFilter from './filter-link'

const Filter = ({ activeFilter, handleFilter }) => (
  <div>
    <h3>Mostrar</h3>
    {filterItems.map((item) => (
      <LinkFilter
        key={item.action}
        action={item.action}
        activeFilter={activeFilter}
        onClick={handleFilter(item.action)}>
        {item.label}
      </LinkFilter>
    ))}
  </div >
)

const filterItems = [
  { label: 'Todos', action: actions.SHOW_ALL },
  { label: 'Finalizados', action: actions.SHOW_COMPLETED },
  { label: 'A fazer', action: actions.SHOW_ACTIVE }
]

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter
})

const mapDispatchToPros = (dispatch) => ({
  handleFilter: (action) => (e) => {
    e.preventDefault()
    dispatch(setVisibilityFilter(action))
  }
})

export default connect(mapStateToProps, mapDispatchToPros)(Filter)
