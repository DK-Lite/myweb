import * as types from './types'

const init = {
    tradeTableData : [],
    tradeMeanChartData : [],
}
function reducer(state=init, action){
    switch(action.type){
        case types.UPDATE_TRADE_TABLE:
            return {
                ...state,
                tradeTableData: action.payload,
            }

        case types.UPDATE_TRADE_MEAN_CHART:
            return {
                ...state,
                tradeMeanChartData: action.payload,
            }
        default:
            return { ...state }
    }
}

export default reducer;