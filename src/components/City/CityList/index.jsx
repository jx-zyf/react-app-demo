import React from 'react'

import './style.less'

class CityList extends React.Component {
    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>北京</span>
                    </li>
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>上海</span>
                    </li>
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>杭州</span>
                    </li>
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>广州</span>
                    </li>
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>南昌</span>
                    </li>
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>深圳</span>
                    </li>
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>南京</span>
                    </li>
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>天津</span>
                    </li>
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>赣州</span>
                    </li>
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>厦门</span>
                    </li>
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>武汉</span>
                    </li>
                    <li>
                        <span onClick={(e) => this.clickHandle(e)}>西安</span>
                    </li>
                </ul>
            </div>
        )
    }
    clickHandle(e) {
        const cityname = e.target.innerText
        this.props.changeCity(cityname)
    }
}

export default CityList