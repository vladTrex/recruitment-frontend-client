import * as actionTypes from "../../constants/actionTypes";

export const auth = (state = false, action) => {
    switch (action.type){
        case actionTypes.CHANGE_AUTH:
            return action.payload
    }
    return state;
}