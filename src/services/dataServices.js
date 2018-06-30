import fetch from 'isomorphic-fetch';
import { GITHUB_REPOS_URL, GITHUB_ISSUES_OPEN_URL } from '../consts/urls.js';

export const fetchRepos = username => {
    return fetch(GITHUB_REPOS_URL(username)).then(response => response.json());
};

export const fetchIssues = (username, repoName) => {
    return fetch(GITHUB_ISSUES_OPEN_URL(username, repoName)).then(response => response.json());
};
