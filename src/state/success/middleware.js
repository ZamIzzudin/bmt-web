import { IsSuccessAction, IsntSuccessAction } from './action'

function ShowSuccess(message) {
    return dispatch => {
        dispatch(IsSuccessAction(message))
    }
}

function HideSuccess() {
    return dispatch => {
        dispatch(IsntSuccessAction())
    }
}

export { ShowSuccess, HideSuccess }