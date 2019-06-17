'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import address from './index'
import { UPDATE_ADDRESS } from './actions'

it('address should be a function', () => {
  expect(address).to.be.a('function')
})

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1
  })

  const action = deepFreeze({
    type: UPDATE_ADDRESS,
    payload: {
      address: 'Rua Maria Osória Nogueira',
      city: 'Jacareí',
      code: '12312-310',
      district: 'Cidade Salvador',
      state: 'SP',
      status: 1
    }
  })

  const after = {
    address: 'Rua Maria Osória Nogueira',
    city: 'Jacareí',
    code: '12312-310',
    district: 'Cidade Salvador',
    state: 'SP',
    status: 1
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
