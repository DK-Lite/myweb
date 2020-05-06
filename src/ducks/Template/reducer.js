import * as types from './types'

const init = {
    stateExample: "null",
}

function reducer(state=init, action){
    switch(action.type){
        case types.EXAMPLE:
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