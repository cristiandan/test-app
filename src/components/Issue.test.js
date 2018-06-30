import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Issue from './Issue';

const props = {
    title: 'Issue 1'
};

test('Issue should render correctly', () => {
    const wrapper = mount(<Issue {...props} />);
    expect(toJson(wrapper.render())).toMatchSnapshot();
    expect(wrapper.find('p').text().trim()).toEqual(props.title);
});
