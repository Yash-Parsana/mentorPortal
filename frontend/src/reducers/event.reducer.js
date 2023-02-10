import { eventConstants } from "../actions/constants"

const initState={
    events:[],
    loading:false,
    error:{}
}


export const eventReducer=(state=initState,action)=>{
    switch(action.type){
        case eventConstants.GET_ALL_EVENTS_REQUEST:{
            return {
                ...state,
                loading:true,
            }
        }
        case eventConstants.GET_ALL_EVENTS_SUCCESS:{
            return {
                ...state,
                loading:false,
                events:action.payload.events
            }
        }
        case eventConstants.GET_ALL_EVENTS_FAILED:{
            return {
                ...state,
                loading:false,
                error:action.payload.error
            }
        }
        case eventConstants.GET_EVENT_BY_MENTOR_ID_REQUEST:{
            return {
                ...state,
                loading:true,
            }
        }
        case eventConstants.GET_EVENT_BY_MENTOR_ID_SUCCESS:{
            return {
                ...state,
                loading:false,
                events:action.payload.events
            }
        }
        case eventConstants.GET_EVENT_BY_MENTOR_ID_FAILED:{
            return {
                ...state,
                loading:false,
                error:action.payload.error
            }
        }
        default:
            return {
                ...state
            }
    }
}
