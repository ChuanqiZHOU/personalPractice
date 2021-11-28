import React from "react";
import ReactDOM from "react-dom";

/* 
  评论列表案例

  comments: [
    { id: 1, name: 'jack', content: '沙发！！！' },
    { id: 2, name: 'rose', content: '板凳~' },
    { id: 3, name: 'tom', content: '楼主好人' }
  ]
*/

import "./index.css";

class App extends React.Component {
  // 初始化状态
  state = {
    comments: [
      { id: 1, name: "jack", content: "沙发！！！" },
      { id: 2, name: "rose", content: "板凳~" },
      { id: 3, name: "tom", content: "楼主好人" },
    ],
    // 评论人
    userName: '',
    //评论内容
    userContent: ''

  };
//渲染函数
  renderList() {
    return this.state.comments.length === 0 ? (
      <div className="no-comment"> 暂无评论， 快去评论吧~ </div>
    ) : (
      <ul>
        {this.state.comments.map((item) => (
          <li key={item.id}>
            <h3> 评论人： {item.name} </h3>
            <p> 评论内容： {item.content} </p>
          </li>
        ))}
      </ul>
    ); 
  }
// 表单处理函数
  
  handleForm = (e) => {
    const { name, value } = e.target;
    this.setState({
       [name]: value
        })  
  }
//发表评论：
  addComment = () => {
     
    const { comments, userName, userContent } = this.state
    //console.log(userName, userContent)
    
    // 非空校验
    if(userName.trim() === '' || userContent.trim() === '') {
      alert('输入内容')
      return
    }
    
    const newComments = [{
      id: Math.random(),
      name: userName,
      content: userContent
    }, ...comments
    ]

    this.setState({
      comments: newComments,
      userName: "", // 清除文本框
      userContent: "" //清除文本框
    });
  }
  render() {
    const { userName, userContent } = this.state;
    return (
      <div className="app">
        <div>
          <input
            className="user"
            type="text"
            placeholder="请输入评论人"
            value={userName}
            name="userName"
            onChange={this.handleForm}
          />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={userContent}
            onChange={this.handleForm}
            name="userContent"
          />
          <br />
          <button onClick= {this.addComment}> 发表评论 </button>
        </div>
        {/* 条件渲染 */}
        {this.renderList()}
      </div>
    );
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById("root"));
