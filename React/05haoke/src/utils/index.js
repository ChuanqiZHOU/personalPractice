// 在utils 建立index.js 在该文件中封装

// 创建获取定位的函数getCurrentCity
import axios from "axios";

export const getCurrentCity = () => {
// 判断localStorage中是否有定位城市：项目中有切换城市的功能，所以需要永久存储的地方
     const localCity = JSON.parse(localStorage.getItem("hkzf_city"));
    if (!localCity) {
    return new Promise((resolve, reject) => {
         // 如果没有，则从首页中获取定位城市，获取后存入到本地存储中，然后立即返回当前城市数据
          const currentCity = new window.BMap.LocalCity();
          currentCity.get(async (res) => {
              try {
                // console.log(res)
                const result = await axios.get(
                  `http://localhost:8080/area/info?name=${res.name}`
                );
               // console.log(result);
                //我们需要的是result的数据 result.data.body.label
                // 存储到本地存贮中

                localStorage.setItem(
                  "hkzf_city",
                  JSON.stringify(result.data.body)
                );
                // 返回该城市数据
                  resolve(result.data.body)
              } catch(e) {
                  //获取定位城市失败
                  reject(e)
              }
          });
        })
    }
     //如果有，则直接返回本地存储的数据
    return Promise.resolve(localCity)    

}





