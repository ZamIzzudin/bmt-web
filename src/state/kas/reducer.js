import { ActionType } from "./action";

export default function KasReducer(kas = [], action = {}) {
        switch (action.type) {
                case ActionType.GET_KAS:
                        return kas = action.payload.kas;
                default:
                        return kas;
        }
}