import React from "react";

import {PickerView} from 'antd-mobile'

import FilterFooter from '../../../../components/FilterFooter';

const province = [

]
export default function FilterPicker() {
  return (
    <>
      {/* 选择器组件 */}
      <PickerView data={province} value={null} cols={3}></PickerView>;
      

      {/* 底部按钮 */}
      <FilterFooter></FilterFooter>
    </>
  )
}
