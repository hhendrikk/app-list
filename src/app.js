'use strict'

import React from 'react'
import { hot } from 'react-hot-loader/root'

import Form from 'components/form'
import Filter from 'components/filter'
import TodoList from 'components/todos-list'
import SearchCep from 'components/search-cep'

import 'milligram'
import 'sass/app.scss'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', padding: 30 }}>
    <div>
      <Form />
      <TodoList />
      <Filter />
    </div>
    <div>
      <SearchCep />
    </div>
  </div>
)

export default hot(App)
