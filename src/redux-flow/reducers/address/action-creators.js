'use strict'

import { SUCCESS, FETCHING } from './actions'

export const fetchAddress = (cep) => async (dispatch, getState) => {
  dispatch({ type: FETCHING })

  const request = await fetch(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`)
  const response = await request.json()

  dispatch(({
    type: SUCCESS,
    payload: response
  }))
}
