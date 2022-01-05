import React from 'react';

import PropTypes from 'prop-types';

import styles from './index.module.css'

function FilterFooter({
    concelText = '取消',
    okText = '确定',
    onCancel,
    onOK,
    className
}) {
    return (
      <div className={[styles.root, className || ' '].join(' ')}>
        {/* 取消按钮 */}
        <span
          className={[styles.btn, styles.cancel].join(' ')}
          onClick={onCancel}
        >
          {concelText}
        </span>

        {/* 确定按钮 */}
        <span
          className={[styles.btn, styles.ok].join(' ')}
          onClick={onOK}
        >
          {okText}
        </span>
      </div>
    )
    
}

// porps校验
FilterFooter.propTypes = {
    cancelText: PropTypes.string,
    okText: PropTypes.string,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    className: PropTypes.string
}

export default FilterFooter