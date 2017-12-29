import React from 'react'

import './style.less'

class BuyAndStore extends React.Component {
    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                {
                    // 是否已经收藏了
                    this.props.isStore
                    ? <button className="selected" onClick={this.storeClickHandle}>已收藏</button>
                    : <button onClick={this.storeClickHandle}>收藏</button>
                }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyClickHandle}>购买</button>
                </div>
            </div>
        )
    }
    buyClickHandle = () => {
        this.props.buyHandle()
    }
    storeClickHandle = () => {
        this.props.storeHandle()
    }
}

export default BuyAndStore