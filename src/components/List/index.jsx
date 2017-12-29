import React, { Component } from 'react'

import Item from './Item'

import './style.less'

class HomeList extends Component {
    render() {
        const { data, needComment } = this.props
        return (
            <div className="list-container">
                {data.map((item, index) => {
                    return <Item key={index} data={item} needComment={needComment} />
                })}
            </div>
        );
    }
}

export default HomeList