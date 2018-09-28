import React,{Component} from 'react'

import './style.scss'

class brand extends Component {
    constructor(props){
        super(props)
        this.state={
           brandlist:[]
        }
    }
    render(){
        return (
            <ul>
                {this.state.brandlist.map((val,index)=>{
                    return <li key={index} className="lists">{val.name}</li>
                })}
            </ul>
        )
    }
    componentDidMount(){
        fetch('/api/brand')
        .then(response=>response.json())
        .then(result=>{
            this.setState({
                brandlist:result.data.A
            })
        })
    }
}

export default brand