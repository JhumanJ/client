import React from 'react'
import NavLink from '.'
import {shallow} from 'enzyme'

describe('NavLink Component', () => {
    const testString = Math.random().toString(36)

    it('NavLink shows children text', () => {
        const navLink = shallow(<NavLink>{testString}</NavLink>)
        expect(navLink.find('a').text()).toEqual(testString)
    })
})
