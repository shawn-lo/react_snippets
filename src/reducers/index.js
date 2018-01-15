import { combineReducers } from 'redux';
import RecordReducer from './reducer_records'
import ActiveRecord from './reducer_active_record'

const rootReducer = combineReducers({
    records: RecordReducer,
    activeRecord: ActiveRecord
});

export default rootReducer;