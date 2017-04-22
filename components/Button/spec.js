import React from 'react'
import Button from '.'
import {shallow} from 'enzyme'

describe('Button Component', () => {
  const testString = Math.random().toString(36)

  it('Button shows children text', () => {
    const button = shallow(<Button>{testString}</Button>)
    expect(button.text()).toEqual(testString)
  })
})
