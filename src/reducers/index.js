import { combineReducers } from 'redux';
import ModelsReducer from './reducer_models'
import ActiveModelReducer from './reducer_active_model'

const rootReducer = combineReducers({
	models: ModelsReducer,
	activeModel: ActiveModelReducer
});

export default rootReducer;
