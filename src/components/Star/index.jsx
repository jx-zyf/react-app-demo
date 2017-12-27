import React from 'react'

import './style.less'

class Star extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            star: 0
        }
    }
    render() {
        // 获取 star 数量，并取余5（最多5个star）
        let star = this.state.star
        star = star === 0 ? this.props.star : star
        star = star > 5 ? star % 5 : star

        return (
            <div className="star-container">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    const lightClass = star >= item ? ' light' : ''
                    return <i key={index} className={'icon-star' + lightClass} onClick={this.clickHandle(item)}></i>
                })}
            </div>
        )
    }
    clickHandle = (star) => {
        const { clickCallback } = this.props
        if (!clickCallback) {
            return
        }
        this.setState({
            star: star
        })
        clickCallback(star)
    }
}

export default Star