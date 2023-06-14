import { ActionType } from "./action";

export default function OfficerReducer(officer = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_OFFICER:
      return (officer = action.payload.officer);
    default:
      return officer;
  }
}
