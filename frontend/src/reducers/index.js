import { combineReducers } from 'redux'
import {authReducer} from './auth.reducer'
import {eventReducer} from './event.reducer'

const rootReducer=combineReducers({
    event:eventReducer
})

export default rootReducer