export const GITHUB_REPOS_URL = username =>
    `https://api.github.com/orgs/${username}/repos`;

export const GITHUB_ISSUES_OPEN_URL = (username, repoName) =>
    `https://api.github.com/repos/${username}/${repoName}/issues?state=open`;
