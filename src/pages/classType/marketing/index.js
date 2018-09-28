import React,{Component,Fragment} from 'react'
import { Grid } from 'antd-mobile';
import './style.scss';
import {withRouter} from 'react-router-dom'
class Marketing extends Component {
    constructor(props){
        super(props)
        this.state={
            banner:"",
            marketingList:[]
        }
    }
    render(){
        return (
            <Fragment>
            <div>
               <img src={this.state.banner} alt="" style={{width:"90%"}} className="ban"/>
            </div>
            <Grid data={this.state.marketingList} activeStyle={false} columnNum={3} hasLine={false}
                onClick={(el,index)=>{
                    this.props.history.push("/home/goodslist",{id:el.id})
                }}
            
            />
        </Fragment>
        )
    }
    componentDidMount(){
        fetch('/api/classData')
        .then(response=>response.json())
        .then(result=>{
            this.setState({
                banner:result.data[0].datas[0].banner.src
            })
    
        })
        fetch("/api/classData")
        .then(response=>response.json())
        .then(result=>{
            this.setState({
                marketingList:result.data[0].datas[0].items.map(val=>(
                    {
                        icon:val.src,
                        text:val.name,
                        id:val.id
                    }
                ))
            })
        })
    }
}

export default withRouter(Marketing)