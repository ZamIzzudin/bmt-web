const ActionType = {
        GET_KAS: "GET_KAS",
}

function GetKasAction(kas) {
    return {
        type: ActionType.GET_KAS,
        payload: {
            kas
        }
    };
}

export { ActionType, GetKasAction }