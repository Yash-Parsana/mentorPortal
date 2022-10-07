import axios from "../helpers/axios";
import { mentorConstants } from "./constants";

export const getAllMentors = () => {
    return async (dispatch) => {
        dispatch({ type: mentorConstants.GET_ALL_MENTORS_REQUEST })
        const res = await axios.get('/mentors')
        console.log('resss', res);
        if (res.status === 200) {
            dispatch({
                type: mentorConstants.GET_ALL_MENTORS_SUCCESS,
                payload: { mentors: res.data.users }
            })
            console.log('users', res.data.users);
        } else {
            dispatch({
                type: mentorConstants.GET_ALL_MENTORS_FAILED,
                payload: { error: res.data.message }
            })
        }
    }
}
