import { mockFetch } from "../../util/mockFetch";
import { SET_DATA } from "./action";

export const setData=(data)=>{
    return {
        type:SET_DATA,
        data,
        loading:true
    }
}
