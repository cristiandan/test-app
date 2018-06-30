import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { IssueList } from './IssueList';
import Issue from './Issue';

const props = {
    repoName: 'Repo 1',
    issues: {
        'Repo 1': [{ id: 1, title: 'Issue1' }, { id: 3, title: 'Issue2' }],
    },
    issuesLoading: { 'Repo 1': false },
};

test('IssueList should render correctly with props', () => {
    const wrapper = mount(<IssueList {...props} />);
    expect(toJson(wrapper.render())).toMatchSnapshot();
    expect(wrapper.find(Issue).first().text()).toEqual('Issue1');
    expect(wrapper.find(Issue).last().text()).toEqual('Issue2');
});

const propsLoading = {
    repoName: 'Repo 1',
    issues: {
        'Repo 1': [],
    },
    issuesLoading: { 'Repo 1': true },
};

test('IssueList should render correctly on loading', () => {
    const wrapper = mount(<IssueList {...propsLoading} />);
    expect(toJson(wrapper.render())).toMatchSnapshot();
    expect(wrapper.find('div').last().text()).toEqual('Loading');
});

test('IssueList should render without props', () => {
    const wrapper = mount(<IssueList {...propsLoading} />);
    expect(toJson(wrapper.render())).toMatchSnapshot();
});
