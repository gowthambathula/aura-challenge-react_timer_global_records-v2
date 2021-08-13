import { SET_DATA } from "../../_internal/action/action";

const initialState={
    data:[],
    loading:false
}

export const records = (state=initialState, action) => {
    switch (action.type){
        case SET_DATA:{
            return {...state, data:action.data, loading:action.loading}
        }
        default:
            return state
    }
};
