import React from 'react'
import Button from '../../components/Button'
import {shallow} from 'enzyme'

describe('Button Text', () => {
  it('Button shows children text', () => {
    const button = shallow(<Button>Test</Button>)
    expect(button.text()).toEqual('Test')
  })
})
