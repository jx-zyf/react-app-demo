import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SearchInput from '../SearchInput'
import './style.less'

class HomeHead extends Component {
    render() {
        const { cityname } = this.props
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{cityname}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    {/* <Link to="/Login"> */}
                        <i className="icon-user"></i>
                    {/* </Link> */}
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        &nbsp;
                        <SearchInput value='' enterHandle={this.enterHandle} />
                    </div>
                </div>
            </div>
        );
    }
    enterHandle = (value) => {
        const { history } = this.props
        history.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHead