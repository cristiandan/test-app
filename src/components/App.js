import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Repo from './Repo'
import { getRepos } from '../actions/actions';

const MainContainer = styled.div`
    text-align: center;
`;

const Header = styled.header`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
    font-size: 1.5em;
`;

const Intro = styled.div`
    font-size: large;
`;



class App extends Component {
    componentDidMount() {
        this.props.loadRepos('nodejs');
    }
    render() {
        return (
            <MainContainer>
                <Header>
                    <Title>Github repos for Nodejs</Title>
                </Header>
                <Intro>
                    <ul>
                    {this.props.repos.map(item => <Repo key={item.id} {...item}/>)}
                    </ul>
                </Intro>
            </MainContainer>
        );
    }
}

export default connect(
    state => ({
        repos: state.repos,
    }),
    dispatch => ({
        loadRepos: username => {
            dispatch(getRepos(username));
        },
    }),
)(App);
