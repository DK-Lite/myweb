// import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
// import * as types from './types'
// import * as mapActions from './actions'

// import { instance } from 'utils/api'


// function* updateTradeTableSaga(action){
//     try{
//         console.log(action)
//         const { data } = yield call(instance.post, "http://34.84.195.184:3691/data-warehouse/apt-unique-info/apt-info", action.payload)

//         console.log(data)
//         //const data = yield call(instance.post, "host:port", action.payload)
//         //yield put(templateActions.success)
//     } catch (e){
//         console.error(e);
//         //yield put(templateActions.fail)
//     }
// }

// // function* loadAptInfo(){
// //     try{
// //         const { data } = yield call(instance.get, "http://34.84.195.184:3691/data-warehouse/apt-unique-info")
// //         console.log(data)
// //         yield put(mapActions.setAptInfos(data.info))
// //     } catch (e){
// //         console.error(e);
// //         //yield put(templateActions.fail)
// //     }
// // }

// export function* watchSaga(){
//     //yield takeEvery(types.UPDATE_APT, updateTradeTableSaga);
// }