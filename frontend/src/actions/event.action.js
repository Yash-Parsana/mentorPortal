import axios from "../helpers/axios";
import { eventConstants } from "./constants";

export const getAllEvents = () => {
    return async (dispatch) => {
        dispatch({ type: eventConstants.GET_ALL_EVENTS_REQUEST })
        const res = await axios.get('/events')
        console.log('resss', res);
        if (res.status === 200) {
            dispatch({
                type: eventConstants.GET_ALL_EVENTS_SUCCESS,
                payload: { events: res.data.events }
            })
        } else {
            dispatch({
                type: eventConstants.GET_ALL_EVENTS_FAILED,
                payload: { error: res.data.message }
            })
        }
    }
}

export const getAllEventBymentorId = (id) => {
    return async (dispatch) => {
        dispatch({ type: eventConstants.GET_EVENT_BY_MENTOR_ID_REQUEST})
        const user = localStorage.getItem('user');
        console.log('userghjkv', user);
        const res = await axios.get(`/events/mentorid/:${id}`)
        console.log('resof eb', res);
        console.log('resss', res);
        if (res.status === 200) {
            dispatch({
                type: eventConstants.GET_EVENT_BY_MENTOR_ID_SUCCESS,
                payload: { events: res.data.event }
            })
        } else {
            dispatch({
                type: eventConstants.GET_EVENT_BY_MENTOR_ID_FAILED,
                payload: { error: res.data.message }
            })
        }
    }
}
