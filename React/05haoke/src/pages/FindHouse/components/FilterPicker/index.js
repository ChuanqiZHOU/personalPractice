import React from "react";
import { useState } from 'react'

import { CascadePickerView, Picker} from 'antd-mobile'

import FilterFooter from '../../../../components/FilterFooter';


export default function FilterPicker({onCancel, onSave, data, type, defaultValues}) {
  const [value, setValue] = useState(defaultValues)
  //console.log(value)
 
      return (
            <>
            {/* 选择器组件 */}
            <CascadePickerView
            options={data}
            value={value}
             onChange={(val) => {
               setValue(val);
              // console.log('onChange', val)
             }}
            />

              {/* 底部按钮 */}
          <FilterFooter onCancel={onCancel}
            onOK={() => onSave(type, value)}></FilterFooter>
            </>
           )
    
}
