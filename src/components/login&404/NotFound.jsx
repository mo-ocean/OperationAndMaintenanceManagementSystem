import React, { Component } from 'react'
import img from "../../assets/images/";
export default class NotFound extends Component {
  render() {
    return (
      <div>
        我是404页面
            <img src={img} alt="404"></img>    
      </div>
    )
  }
}
