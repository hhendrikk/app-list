'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import address from './index'
import { SUCCESS, FETCHING } from './actions'

it('address should be a function', () => {
  expect(address).to.be.a('function')
})

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    isFetching: false
  })

  const action = deepFreeze({
    type: SUCCESS,
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
    status: 1,
    isFetching: false
  }

  expect(address(before, action)).to.be.deep.equal(after)
})

it('should action FETCHING address', () => {
  const before = deepFreeze({
    address: 'Rua Maria Osória Nogueira',
    city: 'Jacareí',
    code: '12312-310',
    district: 'Cidade Salvador',
    state: 'SP',
    status: 1,
    isFetching: false
  })

  const action = deepFreeze({
    type: FETCHING
  })

  const after = {
    address: 'Rua Maria Osória Nogueira',
    city: 'Jacareí',
    code: '12312-310',
    district: 'Cidade Salvador',
    state: 'SP',
    status: 1,
    isFetching: true
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
