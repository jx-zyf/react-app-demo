import React from 'react'

import './style.less'

import SearchInput from '../../SearchInput'

class SearchHead extends React.Component {
    state = {
        value: ''
    }
    render() {
        return (
            <div id="search-header">
                <span className="back-icon" onClick={this.props.goBack}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="search-header-middle">
                    <div className="search-container-1">
                        <i className="icon-search"></i>
                        &nbsp;
                            <SearchInput value={this.state.value} enterHandle={this.enterHandle} />
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount() {
        const { params } = this.props
        const { category, keyword } = params
        const newValue = category === 'all' ? keyword : category
        this.setState({value: newValue})
    }
    enterHandle = (value) => {
        const { history } = this.props
        window.location.reload()
        history.replace('/search/all/' + encodeURIComponent(value))
    }
}

export default SearchHead