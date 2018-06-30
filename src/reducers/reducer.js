import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_ERROR,
    FETCH_ISSUES_REQUEST,
    FETCH_ISSUES_SUCCESS,
} from '../actions/actions';
import initialState from './initialState';

export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_REPOS_SUCCESS:
            return {
                ...state,
                repos: action.data,
            };
        case FETCH_ISSUES_SUCCESS:
            return {
                ...state,
                issues: {
                    ...state.issues,
                    [action.repoName]: action.data,
                },
                issuesLoading: {
                    ...state.issuesLoading,
                    [action.repoName]: false,
                },
            };
        case FETCH_ISSUES_REQUEST:
            return {
                ...state,
                issuesLoading: {
                    ...state.issuesLoading,
                    [action.repoName]: true,
                },
            }
        default:
            return state;
    }
}
