import { ActionType } from "./action";

export default function AdminReducer(admin = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_ADMIN:
      return (admin = action.payload.admin);
    default:
      return admin;
  }
}
