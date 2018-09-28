import React,{Component,Fragment} from 'react'

import './style.scss'

class Sell extends Component {
    render(){
        return (
            <Fragment>
            <div className="ba">
              <img className="banner" src="http://img.cdn.aplum.com/o_1cmpel42l1m261h8t1micshug8om.png" alt=""/>
            </div>
            <div className="infoBtn">
                <div className="Btn" id="xian">
                    <img src="http://img.cdn.aplum.com/o_1ciman8801c4l18m01jcpqdokj710.png" alt=""/>
                    <p>寄卖流程</p> 
                </div>
                <div className="Btn">
                    <img src="http://img.cdn.aplum.com/o_1ciman2951m3vnbt116j14mb9mtr.png" alt=""/>
                    <p>卖家须知</p> 
                </div>
            </div>
            <div className="cm-btn">我要寄卖</div>
            </Fragment>
        )
    }
}

export default Sell