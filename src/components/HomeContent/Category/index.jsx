import React from 'react'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router-dom'

import './style.less'

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            categorys: [
                ['景点', 'KTV', '购物', '生活服务', '健身运动', '美发', '亲子', '小吃快餐', '自助吧', '酒吧'],
                ['美食', '电影', '酒店', '休闲娱乐', '外卖', '火锅', '丽人', '度假出行', '足疗按摩', '周边游'],
                ['日本菜', 'SPA', '结婚', '学习培训', '西餐', '火车机票', '烧烤', '家装', '宠物', '全部分类']
            ]
        };
    }
    getImgName = (i, j) => {
        return `${i + 1}-${j + 1}.png`;
    }
    render() {
        const opt = {
            auto: 3000,
            callback: function (index) {
                this.setState({index: index});
            }.bind(this)
        }
        return (
            <div id='home-category'>
                <ReactSwipe swipeOptions={opt}>
                    {this.state.categorys.map((item, i) => {
                        return (
                            <div key={i} className='carousel-item'>
                                <ul className='clear-fix'>
                                    {item.map((text, j) => {
                                        let imgName = this.getImgName(i, j);
                                        const imgObj = require('../../../static/images/category/' + imgName);
                                        return (
                                            <Link to={`/search/${encodeURIComponent(text)}/all`} key={j}>
                                                <li className='float-left'>
                                                    <img src={imgObj} alt={text} />
                                                    {text}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </ReactSwipe>
                <div className='index-container'>
                    <ul>
                        <li className={this.state.index === 0 ? 'selected' : ''}></li>
                        <li className={this.state.index === 1 ? 'selected' : ''}></li>
                        <li className={this.state.index === 2 ? 'selected' : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Category