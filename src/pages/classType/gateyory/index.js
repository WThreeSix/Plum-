import React,{Component,Fragment} from 'react'
import { Grid} from 'antd-mobile';
import './style.scss'

class GateYory extends Component {
    constructor(props){
        super(props)
        this.state={
            goodlist:[],
            goodlistbao:[],
            goodlistxie:[],
            goodlistshi:[]

        }
    }
    render(){
        return (
            <Fragment>
            <Grid data={this.state.goodlist} activeStyle={false} columnNum={3} hasLine={false} />
            <div className="borders"></div>
            <Grid data={this.state.goodlistbao} activeStyle={false} columnNum={3} hasLine={false}/>
            <div className="borders"></div>
            <Grid data={this.state.goodlistxie} activeStyle={false} columnNum={3} hasLine={false}/>
            <div className="borders"></div>
            <Grid data={this.state.goodlistshi} activeStyle={false} columnNum={3} hasLine={false}/>
            

        </Fragment>
        )
    }
    componentDidMount(){
        fetch("/api/classData")
        .then(response=>response.json())
        .then(result=>{
            this.setState({
                goodlist:result.data[1].datas[0].items.map(val=>(
                    {
                        icon:val.src,
                        text:val.name,
                        id:val.id
                    }
                )),
                goodlistbao:result.data[1].datas[1].items.map(val=>(
                    {
                        icon:val.src,
                        text:val.name,
                        id:val.id
                    }
                )),
                goodlistxie:result.data[1].datas[2].items.map(val=>(
                    {
                        icon:val.src,
                        text:val.name,
                        id:val.id
                    }
                )),
                goodlistshi:result.data[1].datas[3].items.map(val=>(
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

export default GateYory