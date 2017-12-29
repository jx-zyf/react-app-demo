import React, { Component } from 'react'

import List from '../../../components/List'

import { getCollect } from '../../../fetch/user'

class Collect extends Component {
    state = {
        data: []
    }
    componentWillMount() {
        this.getData()
    }
    getData = () => {
        let idArr = this.getIdArr()
        let result = []
        const _this = this
        idArr.forEach(item => {
            getCollect(item)
                .then(res => 
                    res.json()
                )
                .then(json => {
                    result.push(json[0])
                    _this.setState({
                        data: result
                    })
                })
        })
    }
    getIdArr = () => {
        const { store } = this.props
        let collect = store.filter(item => 
            item.isStore
        )
        let idArr = []
        collect.forEach(item => {
            idArr.push(item.id)
        })
        return idArr
    }
    render() {
        const { data } = this.state
        return (
            <div>
                <h2 className="sub_title">我的收藏</h2>
                {data.length > 0
                    ? <List data={data} />
                    : <div className="tishi">暂无数据</div>
                }
            </div>
        )
    }
}

export default Collect