import React, { Component } from 'react';

require('../../../style/modules/loading.less');

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <svg className="spinner" width="100px" height="100px" viewBox="0 0 66 66">
                   <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
        );
    }
}
