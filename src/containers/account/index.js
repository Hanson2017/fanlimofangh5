import React, { Component } from 'react';
import Login from './login';
import Member from './member';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ref: false,
        };
    }
    render() {
        if (localStorage.loginState) {
            return <Member that={this} />;
        }
        else {
            return <Login />;
        }

    }
}