import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { eventReducer } from './event.reducer'
import { mentorReducer } from './mentor.reducer'

const rootReducer = combineReducers({
    event: eventReducer,
    mentor: mentorReducer,
    auth: authReducer
})

export default rootReducer
