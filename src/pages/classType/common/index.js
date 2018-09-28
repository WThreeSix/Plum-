import React,{Component} from 'react'
import {Grid} from 'antd-mobile'
import './style.scss'

class Common extends Component {
    constructor(props){
        super(props)
        this.state={
           commonlist:[]
        }
    }
    render(){
        return (
            <Grid data={this.state.commonlist} activeStyle={false} columnNum={3} hasLine={false} />
        )
    }
    componentDidMount(){
        fetch('/api/classData')
        .then(response=>response.json())
        .then(result=>{
            this.setState({
                commonlist:result.data[3].datas[0].items.map(val=>(
                    {
                        icon:val.src,
                        text:val.name,
                        id:val.id
                    }
                ))
            })
            console.log(result.data[3].datas[0].items)
        })
    }
}

export default Common