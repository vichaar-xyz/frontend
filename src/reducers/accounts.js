import { combineReducers } from "redux";
import { ACCOUNT_ADDRESS_SET } from "../constants/account";


const address = (state = "", action) => {
    if (action.type === ACCOUNT_ADDRESS_SET) {
        return action.value;
    }

    return state;
};


export default combineReducers({
    address,
});