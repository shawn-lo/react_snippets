import {combineReducers} from 'redux';
// import RecordReducer from './reducer_records'
import {LeftTableRecords, RightTableRecords} from './reducer_records'
import ActiveRecord from './reducer_active_record'
import TransRecord from './reducer_click_button'

const initialState = {
    leftRecords: [
        {id: 1, content: '1'},
        {id: 2, content: '2'},
        {id: 3, content: '3'},
        {id: 4, content: '4'},
        {id: 5, content: '5'}
    ],
    rightRecords: [
        { id: 6, content : '6' },
        { id: 7, content : '7' },
        { id: 8, content : '8' },
        { id: 9, content : '9' },
        { id: 10, content : '10'}
    ]
}

export default function rootReducer(state = initialState, action) {
    return Object.assign({}, state, {
        activeRecord: ActiveRecord(state.activeRecord, action),
        transferRecord: TransRecord(state, action)
    })
}

// const rootReducer = combineReducers({
//     leftRecords: LeftTableRecords,
//     rightRecords: RightTableRecords,
//     activeRecord: ActiveRecord,
//     transferRecord: TransRecord
// });
//
// export default rootReducer;