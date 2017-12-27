import React, { Component } from 'react'
import { getInfoData } from '../../../fetch/detail'

import DetailInfoComponent from '../../../components/Detail/DetailInfo'

class DetailInfo extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        const _this = this
        const { id } = this.props
        getInfoData(id)
            .then(res => 
                res.json()
            )
            .then(json => 
                _this.setState({
                    data: json[0]
                })
            )
    }
    render() {
        const { data } = this.state
        return (
            <div>
                {data
                    ? <DetailInfoComponent data={data} />
                    : <div style={{textAlign: 'center', fontSize: '12px', color: '#aaa', marginTop: '20px'}}>暂无数据</div>
                }
            </div>
        );
    }
}

export default DetailInfo