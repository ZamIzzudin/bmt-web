import { ActionType } from "./action";

export default function ManagerReducer(manager = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_MANAGER:
      return (manager = action.payload.manager);
    default:
      return manager;
  }
}
