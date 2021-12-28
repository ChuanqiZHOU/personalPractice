import React from "react";
import ReactDOM from "react-dom";
import { NavBar} from "antd-mobile";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const NewNavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate(-1);
  };

  return (
     <NavBar className="citylists" onBack={handleClick}>城市列表</NavBar>
  )
}

export default class CityList extends React.Component {
  componentDidMount() {
  this.getCityList()
  }
  async getCityList() {
    const res = await axios.get('http://localhost:8080/area/city?level=1');
    console.log(res)
  }
  render() {
    return (
      <div>
       <NewNavBar></NewNavBar>
      </div>
    );
  }
}
