import {combineReducers} from 'redux'
import home from '../pages/home/reducers'
import buycar from '../pages/buyCar/reducers'
export default combineReducers({
    home,
    buycar
})