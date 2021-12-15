import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// v6写法
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
//import img from './images/logo192.png'
//import PropTypes from 'prop-types'
//import Hello from './Hello.js'
// const title = React.createElement('h1', null, 'hello react!!!!');

//using JSX syntax

// const title =(<h1 className="title" >hello JSX<span />
// </h1>);

// using JS in JSX

// const name = 'jack';
// const age = 12;
//  const title = (
//    <h1 className="title">
//      hello JSX
//      <span />
//      {name}, age: {age}s
//    </h1>
//  );

// using if render
//const isloading = true;
// const loadData = () => {
//   if (isloading) {
//   return (<div> data is loading</div>)
// }
// return (<div> loading has finished</div>)
// }

// const title = (<h1>title is {loadData()}</h1>)

// const loadData = () => {
//   return (isloading?
//     <div> data is loading</div>
//     :<div> loading has finished</div>)
// };

// const title = <h1>title is {loadData()}</h1>;

// 渲染列表
// const song = [
//   { id: 1, name: "chuxin juedui1" },
//   { id: 2, name: "chuxin juedui2" },
//   { id: 3, name: "chuxin juedui3" },
//   { id: 4, name: "chuxin juedui4" },
// ];

// const title = (
//   <ul>
//     {song.map( item => <li key= {item.id}>{item.name}</li> )}
//   </ul>
// )


// 函数组件
// function Hello() {
//   return (
//     <div> this is a new react</div>
//   )
// }

// class 组件

// class Hello extends React.Component {
//   render() {
//     return <div> this is a new react class</div>;
//   }
// }


// ReactDOM.render(<Hello/>, document.getElementById('root'))

// React 事件处理


// class App extends React.Component {
//     handleClick() {
//     console.log('click me AND you')
// }
//     render() {
//         return( 
//         <button onClick = {this.handleClick
//         }> CLICK ME</button>)
// }
// };

// 事件处理对象

// class App extends React.Component {
//     handleClick(e) {
//     //console.log('a event')
//         //阻止浏览器的默认行为
//         e.preventDefault();
// }
//     render() {
//         return( 
//         <a onClick = {this.handleClick
//         } href= "http://www.google.com"> CLICK ME</a>)
// }
// };

// state 初始化 js的抽离 以及this 指向
//class App extends React.Component {
//     constructor() {
//         super()
//         //初始化state
//         this.state = {
//             count: 0
//         }
// }
//     state = {
//         count: 0
//     }
//     onIncrement() {
//         this.setState({
//           count: this.state.count + 1,
//         });
//     }

//     render() {
//         return (
//           <div>
//                 <h1>计数器:{this.state.count}</h1>
//                 {/* setState */}
//                 <button onClick={()=>
//                     this.onIncrement()
//                     // () => {
//                     // this.setState({
//                     //     count: this.state.count+=1
//                     // })
//                     // }
//                 }>+1</button>
//           </div>
//         );
// }
// };
//受控组件
// class App extends React.Component {
//     state = {
//     txt: ''
//     }
//     handleChange = e => {
//         this.setState ({
//             txt: e.target.value
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" value={this.state.txt}
//                     onChange={this.handleChange}
//                 />
//         </div>
//     )
// }


// }


// 多表单元素的优化
// class App extends React.Component {
//   state = {
//       txt: "",
//       city:'sh',
//       ischecked: false
//   };
//     handleChange = (e) => {
//         //获取DOM对象
//         const target = e.target;
//         //根据类型 取值
//         const value = target.type === 'checkbox'? target.checked: target.value
//         //获取name
//         const name = target.name;
//     this.setState({
//      [name]: value
//     });
//   };
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           name="txt"
//           value={this.state.txt}
//           onChange={this.handleChange}
//         />
//         <br />
//         <select name="city" value={this.state.city} onChange={this.handleChange}>
//           <option value="sh">shanghai </option>
//           <option value="bj">beijing </option>
//           <option value="gz">guangzhou </option>
//           <option value="sz"> shenzhen</option>
//           <option value="zh"> zhuhai</option>
//         </select>
//         <br />

//         <input
//           type="checkbox"
//           name="ischecked"
//           checked={this.state.ischecked}
//           onChange={this.handleChange}
//         />
//       </div>
//     );
//   }
// }

//非受控组件
// class App extends React.Component {
//     constructor() {
//         super()
//         this.txtRef= React.createRef()
//     }
//     getChange = e => {
//         console.log('文本框的值:', this.txtRef.current.value)
//     }
//     render() {
//         return (
//             <div>
//             <input type="text" ref={this.txtRef} />
//                 <button onClick={this.getChange}>get input</button>
//             </div>
//         )
//     }
// }

// props 的传递数据
// function App(props) {
//     console.log(props);
//     return (
//         <div>THIS IS NAME: {props.name}</div>
//     )
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div>this is {this.props.name} { this.props.colors[1]}from class
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//   <App name="jack" colors={["red", "green"]} />,
//   document.getElementById("root")
// );

// props 父到子的数据传递
// class Parent extends React.Component {
//   state = {
//     lastName: "王",
//   };
//   render() {
//     return (
//       <div>
//         传递给子组件数据 <Child Xing={this.state.lastName} ></Child>
//       </div>
//     )
//   }
// }

// class Child extends React.Component {
//   render() {
//     return <div>子组件接收的数据:{this.props.Xing}</div>;
//   }
// }

// ReactDOM.render(<Parent/>, document.getElementById('root'))

//props 子到父传递数据
// class Parent extends React.Component {
//     state = {
//         parentMsg:''
//     }
//     getChildMsg = (data) => {
//         console.log('来自child的数据', data)
//         this.setState({
//             parentMsg: data
//         })
// }
//   render() {
//     return (
//       <div>
//             父组件中：{this.state.parentMsg}
//             <Child getMsg={this.getChildMsg}></Child>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//     state = {
//         child: 'red'
//     }
//     handleChild = () => {
//     this.props.getMsg(this.state.child)
// }
//   render() {
//       return (
//           <div>
//               <div>这是要传出的数据{this.state.child}</div>
//            <button onClick= {this.handleChild}>点击传递子组件数据</button>
//           </div>
          
//       )
      

//   }
// }

// 兄弟间通讯

// class Parent extends React.Component{
//     state = {
//         count:0
//     }

//     getMsgFrom2 = () => {
//         this.setState({
//             count: this.state.count+1
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <div><Child1 count={this.state.count}/></div>
//                 <div><Child2 getMsg={this.getMsgFrom2}/></div>
//             </div>
//     )
// }
// }
// class Child1 extends React.Component{
//     render() {
//         return (
//             <div>计数器:{this.props.count}</div>
//     )
// }
// }

// class Child2 extends React.Component {


//     handlePlus= ()=>{
        
//         this.props.getMsg()
//     }
//     render() {
//         return (
//             <button onClick={this.handlePlus}>+1</button>
//         )

//     }
// }
// ReactDOM.render(<Parent />,document.getElementById("root"))

// context 的使用
// const { Provider, Consumer } = React.createContext();
// class App extends React.Component{
//     render() {
//         return (
//             <Provider value="pink">
//             <div>
//                 <Node ></Node>
//                 </div></Provider>
            
//         )
//     }
// }

// class Node extends React.Component {
//   render() {
//       return (
        
//       <div>
//         <Child></Child>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   render() {
//     return (
//       <div>
//             I AM CHILD
//             <Consumer>
//                 {
//                     data => <span>子节点的参数{ data}</span>
//                 }
//             </Consumer>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root")
// 
// children 属性
// const APP = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>组件标签的子节点：{props.children}</h1>
//     </div>
//   );
// };
// ReactDOM.render(
//   <APP>i am children node</APP>,
//   document.getElementById("root")
// );

// render-props

//创建mouse组件
// class Mouse extends React.Component{
//   //鼠标位置state
//   state = {
//     x: 0,
//     y: 0
//   }
  //鼠标移动事件的事件处理程序
  // handleMouseMove = e => {
  //   this.setState({
  //     x: e.clientX,
  //     y: e.clientY
  //   })
  // }
  //监听鼠标移动事件,发生于组件创建时期
  // componentDidMount() {
  //   window.addEventListener('mousemove', this.handleMouseMove)
  // }

  //组件卸载时，移除事件
// componentWillUnmount(){
// window.removeEventListener('mousemove', this.handleMouseMove)
// }

  // render() {
    //return null
//return this.props.render(this.state);
//     return this.props.children(this.state);
    
//   }

  
// }

//添加props校验
// Mouse.propTypes = {
//   children: PropTypes.func.isRequired
// }
// class App extends React.Component {

//   mouseFollow = (mouse) => {
//         return <p>鼠标位置： { mouse.x} { mouse.y}</p>
//   }
  
//   render(){
//   return (
//     <div>
//       <h1> render-props mode</h1>
//       <Mouse>
//         {
//           mouse => {
//             return (
//               <p>
//                 鼠标位置： {mouse.x} {mouse.y}
//               </p>
//             );
//           }
//       }
//       </Mouse>
      // <Mouse render={this.mouseFollow} />
      // <Mouse render={mouse => {
      //   return <img src={img} alt="cat" style={{
      //     position:'absolute',
      // top: mouse.y - 96,
      // left: mouse.x - 96
      //   }}/>
      // }}></Mouse> 
//     </div>
//   )}
// };

// 高阶组件

//创建高阶组件
// function withMouse(WrappedComponent) {
//   //提供复用状态逻辑的组件
//   class Mouse extends React.Component {
//     //鼠标位置state
//     state = {
//       x: 0,
//       y: 0,
//     };
//     //鼠标移动事件的事件处理程序
//     handleMouseMove = (e) => {
//       this.setState({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };
//     //监听鼠标移动事件,发生于组件创建时期
//     componentDidMount() {
//       window.addEventListener("mousemove", this.handleMouseMove);
//     }
//     //组件卸载时，移除事件
//     componentWillUnmount(){
//     window.removeEventListener('mousemove', this.handleMouseMove)
//     }
//     render() {
//     //渲染组件，此时创建一个组件，并将this.state的属性添加给它
//       return <WrappedComponent {...this.state}></WrappedComponent>
//     }
//   }
// //设置 displayName
//   Mouse.displayName = `withMouse${getDisplayName(WrappedComponent)}`
//   return Mouse
// }

// function getDisplayName(WrappedComponent) {
//   return WrappedComponent.displayName || WrappedComponent.name || 'component'
// }
//用来测试高阶组件.利用props传入属性值
// const Position = props => (
//   <p>
//     鼠标当前位置是：({props.x}, y:{props.y})
//   </p>
// )
// const newPosition = (props) => (
//   <p>
//     鼠标当前位置是：({props.x}, y:{props.y})
//   </p>
// );

// // 获取增强后的组件
// const MousePosition = withMouse(Position);
// const MouseNewPosition = withMouse(newPosition);

// class App extends React.Component{
//   render() {
//     return (
//       <div>
//         <h1>高阶组件</h1>
//         <MousePosition></MousePosition>
//         <MouseNewPosition></MouseNewPosition>
//       </div>
//     )
//   }
// }

// state 优化 生成随机数
// class App extends React.Component {
//   state = {
//     number: 0,
//   };

//   handleClick = () => {
//     this.setState(() => {
//       return {
//         // 小于3的随机整数
//         number: Math.floor(Math.random() * 3),
//       };
//     });
//   };
  //因为2次生成的随机数，可能相同，那么此时不需要重新渲染
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('the newest state:', nextState, 'curent state', this.state)
    // if (nextState.number === this.state.number) {
    //   return false
    // }
    // return true

    //return nextState.number !== this.state.number;
    // if (nextState.number !== this.state.number) {
    //   return true;
    // }
    // return false;
  //}

//   render() {
//     //console.log('parent render');
//     return (
//       <div>
//         <NumberBox number={ this.state.number}/>
//         <button onClick={this.handleClick}> 重新生成</button>
//       </div>
//     );
//   }
// }
  // class NumberBox extends React.Component {
  //   shouldComponentUpdate(nextProps) {
  //     console.log("the newest PROPS:", nextProps, "curent props", this.props);
  //     if (nextProps.number === this.props.number) {
  //     return false
  //    }
    
  //    return true
  //  }
   
   
  //   render() {
  //     console.log('child render')
  //     return (
  //   <h1>随机数:{this.props.number}</h1>
  //     )
  //   }
  // } 
// 虚拟DOM 案例
// class App extends React.Component {
//   state = {
//     number:0
//   }

//   handClick = () => {
//     this.setState({
//         number: Math.floor(Math.random() * 2)
//     })
//   }
//   render() {
//     const el = (
//       <div>
//         <h1>随机数：</h1>
//         <p>{this.state.number}</p>
//         <button onClick= {this.handClick}>chongxin</button>
//       </div>
//     )
//     console.log(el);
//     return el
//   }
// }

// 路由
// const First = () => <p>页面一的内容</p>
// const App = () => (
//   //<Router>
//   <div className="App">
//     <h1> React 路由基础</h1>
//     {/* 指定路由的入口 */}
//     <Link to="/first">页面一</Link>
//     {/* 指定路由的出口 */}
//     <Routes>
//       <Route path="/first" element={<First></First>}></Route>
//     </Routes>
//     {/* <Route path='/first' component={First}></Route> */}
//   </div>
//   //</Router>
// );

//编程式导航
import { useNavigate } from 'react-router-dom'

function Login() {
  let navigate = useNavigate();
  function handleLogin() {
    navigate('/home')
  }
   return (
      <div>
        <p>登录页面</p>
        <button onClick={handleLogin}>登录</button>
      </div>
    )
}

    // 使用编程式导航实现路由跳转
    // this.props.history.push('/home')

const Home = () => {
  let navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
 return (
   <div>
    <h2>我是后台首页</h2>
    <button onClick={handleBack}>返回登录页面</button>
  </div>
 )
}

const App = () => (
  <div>
    <h1>编程式导航</h1>
    <Link to="/login">去登录页面</Link>
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
    </Routes>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
  <App></App>
  </BrowserRouter >,
  document.getElementById("root")
);