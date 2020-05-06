import * as types from './types'

const init = {
    stateExample: "null",
    apartInfos : [],
}

function reducer(state=init, action){

    switch(action.type){
        
        case types.SET_APT_INFOS:
            return {
                ...state,
                apartInfos: action.payload,
            }
        case types.UPDATE_APT:
            console.log("reducer : success")
            return {
                ...state,
                stateExample: action.payload,
            }
        default:
            return { ...state }
    }
}

export default reducer;