import React from 'react';
import HotelCard from './HotelCard';
import { shallow, render, mount } from 'enzyme';

it("renders correctly", () => {
  const wrapper = shallow(
    // eslint-disable-next-line react/react-in-jsx-scope
    <HotelCard source={{address:['bergen rd.'], amenities:['gym'], phone:"9173276941", criteria:{atmosphere:"lively", style:"modern"}}} bookmark={()=>{}} unbookmark={()=>{}}/>
  )
  // expect(wrapper).toMatchSnapshot()
})

it("renders correctly 2", () => {
  const wrapper = render(
    // eslint-disable-next-line react/react-in-jsx-scope
    <HotelCard source={{address:['bergen rd.'], amenities:['gym'], phone:"9173276941", criteria:{atmosphere:"lively", style:"modern"}}} bookmark={()=>{}} unbookmark={()=>{}}/>
  )
  // expect(wrapper).toMatchSnapshot()
})

it("renders correctly 3", () => {
  const wrapper = mount(
    // eslint-disable-next-line react/react-in-jsx-scope
    <HotelCard source={{address:['bergen rd.'], amenities:['gym'], phone:"9173276941", criteria:{atmosphere:"lively", style:"modern"}}} bookmark={()=>{}} unbookmark={()=>{}}/>
  )

  const text = wrapper.find("Caption").at(1).find("p").text()
  console.log(text);
  
  // expect(wrapper).toMatchSnapshot()
})