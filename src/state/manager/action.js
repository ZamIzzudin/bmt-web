const ActionType = {
  GET_MANAGER: "GET_MANAGER",
};

function GetManagerAction(manager) {
  return {
    type: ActionType.GET_MANAGER,
    payload: {
      manager,
    },
  };
}

export { ActionType, GetManagerAction }
