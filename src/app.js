'use strict'

import React from 'react'
import { hot } from 'react-hot-loader/root'

import 'sass/app.scss'

const App = () => (
  <div>
    <input type='text' />

    <ul>
      <li style={{ textDecoration: 'line-through' }}>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>

    <div>
      <h3>Mostrar</h3>
      <a href='#'>Todos</a> | <a href='#'>Finalizados</a> | <a href='#'>A fazer</a>
    </div>
  </div>
)

export default hot(App)
