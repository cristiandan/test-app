import { fetchRepos, fetchIssues } from '../services/dataServices';

export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';

export const FETCH_ISSUES_REQUEST = 'FETCH_ISSUES_REQUEST';
export const FETCH_ISSUES_SUCCESS = 'FETCH_ISSUES_SUCCESS';
export const FETCH_ISSUES_ERROR = 'FETCH_ISSUES_ERROR';

export const getRepos = username => {
    return dispatch => {
        return fetchRepos(username).then(data =>
            dispatch(getReposSuccess(data)),
        );
    };
};

export const getReposSuccess = data => ({
    type: FETCH_REPOS_SUCCESS,
    data,
});

export const getIssues = (username, repoName) => {
    return dispatch => {
        dispatch(getIssuesRequest(repoName));
        return fetchIssues(username, repoName).then(data =>
            dispatch(getIssuesSuccess(repoName, data)),
        );
    };
};

export const getIssuesSuccess = (repoName, data) => ({
    type: FETCH_ISSUES_SUCCESS,
    data,
    repoName,
});

export const getIssuesRequest = repoName => ({
    type: FETCH_ISSUES_REQUEST,
    repoName,
});
