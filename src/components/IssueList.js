import React from 'react';
import { connect } from 'react-redux';
import Issue from './Issue';

const IssueList = ({ repoName, issues = [], issuesLoading = [] }) => {
    const issuesList = issues[repoName]
        ? issues[repoName].map(item => <Issue {...item} key={item.id} />)
        : '';
    return (
        <div>
            {issuesLoading[repoName] && <div>Loading</div>}
            {issuesList}
        </div>
    );
};

export default connect(state => ({
    issues: state.issues,
    issuesLoading: state.issuesLoading,
}))(IssueList);
