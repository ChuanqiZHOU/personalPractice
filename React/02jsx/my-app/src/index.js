import React from 'react';
import ReactDOM from 'react-dom';

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
const song = [
  { id: 1, name: "chuxin juedui1" },
  { id: 2, name: "chuxin juedui2" },
  { id: 3, name: "chuxin juedui3" },
  { id: 4, name: "chuxin juedui4" },
];

const title = (
  <ul>
    {song.map( item => <li>{item.name}</li> )}
  </ul>
)


















ReactDOM.render(title, document.getElementById('root'))