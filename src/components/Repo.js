import React from 'react';
import { connect } from 'react-redux';
import { getIssues } from '../actions/actions';
import Issue from './Issue';

const Repo = ({ name, owner: { login }, fetchIssues, issues = {}, issuesLoading = {} }) => {
    let issuesList = "";
    if (issuesLoading[name]) {
        issuesList = "Loading"
    }
    if (issues[name]) {
        issuesList = issues[name].map(item => <Issue {...item} key={item.id}/>)
    }
    return <li onClick={() => fetchIssues(login, name)}>{name} {issuesList}</li>;
};

export default connect(
    state => ({
        issues: state.issues,
        issuesLoading: state.issuesLoading,
    }),
    dispatch => ({
        fetchIssues: (username, repoName) => {
            dispatch(getIssues(username, repoName));
        },
    }),
)(Repo);
