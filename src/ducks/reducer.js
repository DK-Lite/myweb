import { combineReducers } from 'redux'
import { reducer as template } from './Template'
import { reducer as map } from './Map'
import { reducer as analyzer } from './Analyzer'

const rootReducer = combineReducers({
    template,
    map,
    analyzer,
})
export default rootReducer;