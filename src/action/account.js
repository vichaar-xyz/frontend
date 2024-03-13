import { ACCOUNT_ADDRESS_SET } from "../constants/account"

export const setAccountAddress = (value) => {
    return {
        type: ACCOUNT_ADDRESS_SET,
        value,
    };
};