'use strict'

import React from 'react'

const FilterLink = ({ action, activeFilter, children, onClick }) => {
  if (activeFilter === action) {
    return <span style={{ marginRight: '10px' }}>{children}</span>
  }

  return (
    <a
      href='#'
      onClick={onClick}
      style={{ marginRight: '10px' }}>{children}</a >
  )
}

export default FilterLink
