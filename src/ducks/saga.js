import { all, fork } from 'redux-saga/effects'
import { sagas as templateSaga } from './Template'
import { sagas as mapSaga } from './Map'
import { sagas as analyzerSaga } from './Analyzer'

function combineSagas(...sagas) {
    return function* rootSaga(){
        yield all(sagas.reduce( (prevSagas, saga) => [
            ...prevSagas,
            ...Object.keys(saga).map( key => fork(saga[key]))
            ] , [])
        )
    }
}

export default combineSagas(
    templateSaga,
    mapSaga,
    analyzerSaga,
)