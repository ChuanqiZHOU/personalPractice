import React from "react";
import ReactDOM from "react-dom";
import SearchHeader from "../../components/SearchHeader";
import './index.css'
import { getCurrentCity } from "../../utils";


export default class FindHouse extends React.Component {
  state = {
    // 当前城市
    currentCityName: "上海"
  };
  componentDidMount() {
    
    const currentCity = JSON.parse(localStorage.getItem('hkzf_city'));
    this.setState({
      currentCityName: currentCity.label,
    });
  }

  render() {
    return (
      <div>
        <div className="navi_top">
          <SearchHeader func={() => (this.state.currentCityName)}></SearchHeader>
        </div>
      </div>
    );
  }
}
