import React, { Component, createRef} from 'react'

import styles from './index.module.css'

import PropTypes from 'prop-types'

class Sticky extends Component {
    
    placeholder = createRef();
    content = createRef();
    
    handleScroll = () => {
        const {height} = this.props;
        //获取DOM对象；

        //console.log('sticky')
        const placeholderEl = this.placeholder.current;
        const contentEl = this.content.current;

        const {top} = placeholderEl.getBoundingClientRect();
        if (top < 0) {
            //吸顶
            contentEl.classList.add(styles.fixed);
            placeholderEl.style.height = `${height}px`;
        } else {
            contentEl.classList.remove(styles.fixed)
            placeholderEl.style.height = '0px'
        }


    }
    //监听scroll事件
    componentDidUpdate() {
        window.addEventListener('scroll', this.handleScroll, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll,true)
    }
    render() {
        return (
            <div ref= {this.placeholder}>
                {/* 占位符 */}
                <div ref={this.content}>
                    {this.props.children}
                </div>
            </div>
        )

    }
}


Sticky.propTypes = {
    height: PropTypes.number.isRequired
}
export default Sticky

