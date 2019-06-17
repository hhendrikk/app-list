'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { updateAddress } from 'reducers/address/action-creators'
import SearchCep from './search-cep'

class SearchCepContainer extends PureComponent {
  state = {
    isFetching: false
  }

  handleSearchCep = async (e) => {
    e.preventDefault()

    this.setState({ isFetching: true })

    const cep = e.target.cep.value
    const request = await fetch(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`)
    const response = await request.json()

    this.setState({ isFetching: false })
    this.props.dispatch(updateAddress(response))
  }

  render () {
    return (
      <SearchCep
        {...this.state}
        {...this.props.address}
        handleSubmit={this.handleSearchCep} />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

export default connect(mapStateToProps)(SearchCepContainer)
