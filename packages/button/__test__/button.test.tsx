import React from 'react'
import { render } from '@testing-library/react'

import Button from '../src/button'

describe('Button', () => {
  const renderComponent = () => render(<Button>Hello World</Button>)
  it('should have content', () => {
    console.log(renderComponent())
  })
})
