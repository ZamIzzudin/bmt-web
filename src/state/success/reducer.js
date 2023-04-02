import { ActionType } from "./action";

export default function SuccessReducer(success = { status: false }, action = {}) {
    switch (action.type) {
        case ActionType.IS_SUCCESS:
            return success = action.payload
        case ActionType.ISNT_SUCCESS:
            return success = { status: false }
        default:
            return success;
    }
}