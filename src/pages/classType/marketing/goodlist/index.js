import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import './style.scss'
import {connect} from 'react-redux'
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
class Goodslist extends Component {
    constructor(props){
        super(props)
        this.state={
            goodlist:[],
            myId:"1"
        }
    }
    render(){
        return (
            <div>
               <ul className="navList">
                   <li>默认排序</li>
                   <li>价格</li>
                   <li>筛选</li>
                   <li>只看在售</li>
               </ul>
               <div className="content">
                    {this.state.goodlist.map((val,index)=>{
                        return (
                            <div key={index} onClick={()=>{
                                this.props.addgood({
                                    name:val.name,
                                    photo_url:val.photo_url,
                                    pic:val.sale_price,
                                    brand_name:val.brand_name
                                })
                    
                            }}>
                               <img src={val.photo_url} className="photo" alt=""/>
                                <p className="activity-icons">
                                    <span className="act-tagactivity">满减</span>
                                    <span className="act-tagactivity">限时折扣</span> 
                                </p>
                                <h5 className="brand-name activiy-name">
                                    <span className="nameType">{val.brand_name}</span>
                                    <img src="http://img.cdn.aplum.com/o_1cntv0kff49o1qff1d591e7817ctm.png" alt="" className="png"/>
                                </h5> 
                                <p className="product-name">{val.name}</p>
                                <p className="size-info"><span className="size">{val.size}码</span></p>
                                <p className="prices-info">
                                    <strong className="pricediscount-price">¥{val.sale_price}</strong>
                                    <del className="pricesale-price">¥{val.original_price}</del>
                                    <span className="discount-tagfloat-right">{val.origin_discount_text}</span>
                                </p>
                            </div>
                        )
                    })}
               </div>
            </div>
        )
    }
    componentDidMount(){
        if(this.props.location.state.id){
            this.setState({
                myId:this.props.location.state.id
            })
        }
        
        fetch('/api/tag')
        .then(response=>response.json())
        .then(result=>{
            this.setState({
                goodlist: result.data[this.state.myId]
            })
        })
    }
}

export default withRouter(connect(null,carDispatch)(Goodslist))