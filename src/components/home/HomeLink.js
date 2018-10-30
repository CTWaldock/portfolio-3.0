import React, { Component } from 'react';
import './homeStyles/homeStyles.css';

class HomeLink extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <a href={this.props.routeTo} className={'Button'}>
                    {this.props.title}
                </a>
            </div>
        );
    }
}

export default HomeLink;
