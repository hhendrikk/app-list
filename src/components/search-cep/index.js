'use strict'

import React from 'react'
import { connect } from 'react-redux'

import { fetchAddress } from 'reducers/address/action-creators'
import SearchCep from './search-cep'

const SearchCepContainer = ({ handleSubmit, address }) => (
  <SearchCep
    {...address}
    handleSubmit={handleSubmit} />
)

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(fetchAddress(e.target.cep.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
