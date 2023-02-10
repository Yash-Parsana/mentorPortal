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
// mentor, photo, followers, language, experience, industry, domain, tools, district, state, intro
// export const addMentor = () => {
//     return async (dispatch) => {
//         dispatch({ type: mentorConstants.ADD_MENTOR_REQUEST })

//         const user = localStorage.getItem('user');
//         console.log('user', user);
//         const res = await axios.post(`/addmentor/${id}`,);
//         console.log('resss', res);
//         if (res.status === 200) {
//             dispatch({
//                 type: mentorConstants.ADD_MENTOR_SUCCESS,
//                 payload: { mentors: res.data.users }
//             })
//             console.log('users', res.data.users);
//         } else {
//             dispatch({
//                 type: mentorConstants.ADD_MENTOR_FAILED,
//                 payload: { error: res.data.message }
//             })
//         }
//     }
// }
