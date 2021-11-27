import React, { Component } from "react";
import GioHangRedux from "./GioHangRedux";
import ProduceListRedux from "./produceListRedux";
import {Badge} from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons'
import {connect} from 'react-redux'

// console.log(soluong)
class BtGioHangRedux extends Component {
  
  render() {
    const soluong =  this.props.count.reduce((total,gioHang)=>{return total+=gioHang.soLuong},0)
    
    return (
      <div className="container-fluid">
        <h3 className="text-center">BÀI TẬP GIỎ HÀNG</h3>
        <div
          data-toggle="modal"
          data-target="#modelId"
          style={{ width: "200px", cursor: "pointer", marginLeft: "90%" }}
        >
          <Badge 
          count={soluong}
          >
            <ShoppingCartOutlined
              style={{ fontSize: "40px", color: "orangered" }}
            />
          </Badge>
        </div>
        <GioHangRedux />
        <ProduceListRedux />
      </div>
    );
  }
}

const mapStayToProps = (state)=>{
  return {
    count: state.gioHang.gioHang
  }
}

export default connect(mapStayToProps)(BtGioHangRedux)
