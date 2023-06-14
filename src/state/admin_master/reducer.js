import { ActionType } from "./action";

export default function AdminMasterReducer(admin_master = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_ADMIN_MASTER:
      return (admin_master = action.payload.admin_master);
    default:
      return admin_master;
  }
}
