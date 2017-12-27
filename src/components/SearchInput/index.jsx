import React from 'react'

import './style.less'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: this.props.value || ''
        }
    }
    render() {
        return (
            <input
                className="search-input" 
                type="text" 
                placeholder="请输入关键字" 
                onChange={this.ChangeHandle}
                onKeyUp={this.keyupHandle}
                value={this.state.value} />
        )
    }
    ChangeHandle = (e) => {
        // 监控变化
        this.setState({
            value: e.target.value
        })
    }
    keyupHandle = (e) => {
        if (e.keyCode !== 13) {
            return
        }
        this.props.enterHandle(e.target.value)
    }
}

export default SearchInput