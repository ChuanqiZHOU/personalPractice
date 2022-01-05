import React from "react";
import FilterFooter from '../../../../components/FilterFooter'
import styles from './index.module.css'
 // 渲染标签
  const renderFilters = ()=> {
    //高亮类名： styles.tagactive
    return (
      <span className={[styles.tage, styles.tageActive].join(' ')}>东北</span>
    )
  }

export default function FilterMore() {
  return (
    <div className={styles.root}>
      {/* 遮罩层 */}
      <div className={styles.mask}></div>
      
      {/* 条件内容 */}
      <div className={styles.tages}>
        <dl className={styles.dl}>
          <dt className={styles.dt}>户型</dt>
          <dd className={styles.dd}>{renderFilters()}</dd>

          <dt className={styles.dt}>朝向</dt>
          <dd className={styles.dd}>{renderFilters()}</dd>

          <dt className={styles.dt}>楼层</dt>
          <dd className={styles.dd}>{renderFilters()}</dd>

          <dt className={styles.dt}>房屋亮点</dt>
          <dd className={styles.dd}>{renderFilters()}</dd>
        </dl>
      </div>

      {/* 底部按钮 */}
      <FilterFooter className={styles.footer}></FilterFooter>
    </div>

  )
 
}
