import React, { Component } from 'react'
import { getAdData } from '../../../fetch/home'

import HomeAdComponent from '../../../components/HomeContent/HomeAd'

class HomeAd extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        const _this = this
        getAdData()
            .then(res => 
                res.json()
            )
            .then(json => {
                _this.setState({
                    data: json
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const { data } = this.state
        return (
            <HomeAdComponent data={data} />
        );
    }
}

export default HomeAd