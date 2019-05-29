import React from 'react';
import SearchBox from './SearchBox';
import { shallow, render, mount } from 'enzyme';

it("renders correctly", () => {
  const wrapper = shallow(
    // eslint-disable-next-line react/react-in-jsx-scope
    <SearchBox search={()=>{}}/>
  )
  expect(wrapper).toMatchSnapshot()
})

it("renders correctly 2", () => {
  const wrapper = render(
    // eslint-disable-next-line react/react-in-jsx-scope
    <SearchBox search={()=>{}}/>
  )
  expect(wrapper).toMatchSnapshot()
})
