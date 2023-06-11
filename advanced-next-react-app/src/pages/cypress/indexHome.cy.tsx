import React from 'react'
import Home from './index'

describe('<Home />', () => {
  it('renders', () => {
    cy.mount(<Home />)
  })
})