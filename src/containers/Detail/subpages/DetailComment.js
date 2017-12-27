import React, { Component } from 'react'

import { getCommentData } from '../../../fetch/detail'

import ComentComponent from '../../../components/Detail/DetailComment'

import './style.less'

class DetailComment extends Component {
    state = {
        data: [],
        hasMore: true,
        page: 1
    }
    componentDidMount() {
        this.getData(1)
    }
    getData = (page) => {
        const _this = this
        const { id } = this.props
        getCommentData(id, page)
            .then(res => 
                res.json()
            )
            .then(json => 
                _this.setState({
                    data: json.result,
                    hasMore: json.hasMore
                })
            )
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
    render() {
        const { data, hasMore } = this.state
        const tishi = <div>
            {hasMore
                ? <div onClick={(e) => this.loadMore(e)} className="tishi">加载更多</div>
                : <div className="tishi">我是有底线的</div>
            }
        </div>
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {data.length > 0
                    ? <div>
                        <ComentComponent data={data} />
                        {tishi}
                    </div>
                    : <div className="tishi">暂无数据</div>
                }
            </div>
        );
    }
}

export default DetailComment