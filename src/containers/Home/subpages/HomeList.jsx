import React, { Component } from 'react'
import { getListData } from '../../../fetch/home'

import ListComponent from '../../../components/List'

import './HomeList.less'

class HomeList extends Component {
    state = {
        data: [],
        hasMore: true,
        page: 1
    }
    componentDidMount() {
        this.getData(1)
    }
    loadMore(e) {
        e.target.innerText = '加载中...'
        let page = this.state.page
        this.setState({
            page: page + 1
        })
        this.getData(page)
        e.target.innerText = '加载更多'
    }
    getData = (page) => {
        const _this = this
        const { cityname } = this.props
        getListData(cityname, page)
            .then(res => 
                res.json()
            )
            .then(json => {
                _this.setState({
                    data: json.result,
                    hasMore: json.hasMore
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const { data, hasMore } = this.state
        const tishi = <div>
            {hasMore
                ? <div onClick={(e) => this.loadMore(e)} className="tishi">加载更多</div>
                : <div className="tishi">我是有底线的</div>
            }
        </div>
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {data.length > 0
                    ? <div>
                        <ListComponent data={data} />
                        {tishi}
                    </div>
                    : <div className="tishi">暂无数据</div>
                }
            </div>
        );
    }
}

export default HomeList