import React,{Component} from 'react'
import {connect} from 'react-redux'
import './style.scss'



const carStare = state=>{
    return {
      storeTab:state
    }
}
const carDispatch = dispatch=>{
    return {
      addgood:(payload)=>{
        dispatch({
          type:"BUYCAR",
          payload
        })
      }
    }
  }
class Buycar extends Component {
    constructor(props){
        super(props)
        this.state={
            allPrice:0
        }
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <div className="listbuy">
                    <div className="title">
                        <p className="lf">超时商品</p>
                        <p className="rt">共<span>{this.props.storeTab.buycar.buycarlist.length}</span>件</p>
                    </div>
                    {
                        this.props.storeTab.buycar.buycarlist.map((val,index)=>{
                            
                            return (
                                <div key={index} className="big">
                                    <div className="lf"><img src={val.photo_url} alt=""/></div>
                                    <div className="rt">
                                        <p>品牌：{val.brand_name}</p>
                                        <p>商品：{val.name}</p>
                                        <p>价格：￥{val.pic}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="bottomInfoWrap">
                    <div className="checkall-box">
                        <input type="checkbox" className="selectall" id="all"/>
                        <p className="all">全选</p>
                    </div>
                    <div className="moneytopay">
                        <p className="total"><span>合计：</span>¥{this.state.allPrice}</p>
                        <p className="trans"><span>总额：</span>¥{this.state.allPrice}</p>
                    </div>
                    <div className="createorder">去下单</div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var sum=0;
        for(var i=0; i<this.props.storeTab.buycar.buycarlist.length;i++){
            sum += this.props.storeTab.buycar.buycarlist[i].pic/1;
        }
        this.setState({
            allPrice:sum
        })
    }
}

export default connect(carStare,carDispatch)(Buycar)