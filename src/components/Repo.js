import React from 'react';
import { connect } from 'react-redux';
import { getIssues } from '../actions/actions';
import IssueList from './IssueList'

class Repo extends React.Component {
    state = {
        expanded: false,
        loaded: false,
    };

    handleClick = (login, name) => {
        !this.state.loaded && this.props.fetchIssues(login, name).then(
            // set loaded state so we don't request data again
            this.setState(() => ({ loaded: true })),
        );
        this.setState(({expanded}) => ({ expanded: !expanded}))
    };

    render() {
        const {
            name,
            owner: { login },
            fetchIssues,
            issues = {},
            issuesLoading = {},
        } = this.props;

        return (
            <li
                onClick={() =>
                    this.handleClick(login, name)
                }
            >
                {name} 
                {this.state.expanded && <IssueList repoName={name} />}
            </li>
        );
    }
}

export default connect(
    state => ({
        issues: state.issues,
        issuesLoading: state.issuesLoading,
    }),
    dispatch => ({
        fetchIssues: (username, repoName) => {
            return dispatch(getIssues(username, repoName));
        },
    }),
)(Repo);
