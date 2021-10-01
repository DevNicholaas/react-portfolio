import React, { Component } from 'react';

export default class BlogModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ReactModal isOpen={true}>
                <h1>I'm in a modul!</h1>
            </ReactModal>
        )
    }
}