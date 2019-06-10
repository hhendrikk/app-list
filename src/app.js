'use strict'

import React from 'react'
import { hot } from 'react-hot-loader/root'

import Form from 'components/form'
import Filter from 'components/filter'
import TodoList from 'components/todos-list'

import 'sass/app.scss'

const App = () => (
  <div>
    <Form />
    <TodoList />
    <Filter />
  </div>
)

export default hot(App)
