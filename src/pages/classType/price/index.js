import React,{Component} from 'react'
import {Grid} from 'antd-mobile'
import './style.scss'

class Price extends Component {
    constructor(props){
        super(props)
        this.state={
           pricelist:[]
        }
    }
    render(){
        return (
            <Grid data={this.state.pricelist} activeStyle={false} columnNum={3} hasLine={false} />
        )
    }
    componentDidMount(){
        fetch('/api/classData')
        .then(response=>response.json())
        .then(result=>{
            this.setState({
                pricelist:result.data[4].datas[0].items.map(val=>(
                    {
                        icon:val.src,
                        text:val.name,
                        id:val.id
                    }
                ))
            })
            console.log(result.data[4].datas[0].items)
        })
    }
}

export default Price