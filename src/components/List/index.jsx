import React, { Component } from 'react'

import Item from './Item'

import './style.less'

class HomeList extends Component {
    render() {
        const data = this.props.data
        return (
            <div className="list-container">
                {data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        );
    }
}

export default HomeList