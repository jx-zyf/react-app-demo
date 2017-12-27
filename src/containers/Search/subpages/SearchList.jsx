import React, { Component } from 'react'
import { getSearchListData } from '../../../fetch/search'

import ListComponent from '../../../components/List'

import './SearchList.less'

class SearchList extends Component {
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
        const { cityname, params: { category, keyword } } = this.props
        getSearchListData(cityname, category, keyword, page)
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
                {data.length > 0
                    ? <div>
                        <ListComponent data={data} />
                        {tishi}
                    </div>
                    : <div className="tishi">暂无数据</div>
                }
            </div>
        )
    }
}

export default SearchList