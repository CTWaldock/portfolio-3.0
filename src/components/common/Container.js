import React, { Component } from 'react';
import './commonStyles/commonStyles.css';

class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className={'Container'}>{this.props.children}</div>;
    }
}

export default Container;
