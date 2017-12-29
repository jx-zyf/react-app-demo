import React, { Component } from 'react'

import { getOrderList } from '../../../fetch/user'

import List from '../../../components/List'

class OrderList extends Component {
    state = {
        data: []
    }
    componentWillMount() {
        this.getData()
    }
    getData = () => {
        const _this = this
        getOrderList()
            .then(res => 
                res.json()
            )
            .then(json => {
                _this.setState({
                    data: json
                })
            })
    }
    render() {
        const { data } = this.state
        return (
            <div>
                <h2 className="sub_title">我的订单</h2>
                {data.length > 0
                    ? <List data={data} needComment={true} />
                    : <div className="tishi">暂无数据</div>
                }
            </div>
        )
    }
}

export default OrderList