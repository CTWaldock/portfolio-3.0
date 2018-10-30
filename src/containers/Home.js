import React, { Component } from 'react';
import Container from '../components/common/Container';
import HomeLink from '../components/home/HomeLink';

class Home extends Component {
    render() {
        return (
            <Container>
                <div className={'ButtonPosition'}>
                    <HomeLink routeTo={'/about'} title={'ABOUT'} />
                    <HomeLink routeTo={'/projects'} title={'PROJECTS'} />
                    <HomeLink routeTo={'/contact'} title={'CONTACT'} />
                </div>
                <div className={'TextPosition'}>
                    <h1 className={'HeaderText'}>ようこそ</h1>
                </div>
            </Container>
        );
    }
}

export default Home;
