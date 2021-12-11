import React from 'react';
import ReactDOM from 'react-dom';
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
//      {name}, age: {age}
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
const APP = (props) => {
  console.log(props);
  return (
    <div>
      <h1>组件标签的子节点：{props.children}</h1>
    </div>
  );
};

ReactDOM.render(
  <APP>i am children node</APP>,
  document.getElementById("root")
);