import axios from 'axios';

export const TestAction = () => {
    return (dispatch: any) => {
        dispatch(actionPending());
        axios.get('https://api.github.com/users/sacherina')
        .then(res => {
            dispatch(actionSuccess(res))
        })
        .catch(err => {
            dispatch(actionFailure(err))
        })
    }
}

const actionPending = () => ({
    type: testAction.pending
});

const actionSuccess = (res: any) => ({
    type: testAction.success,
    payload: {res}
});

const actionFailure = (err: any) => ({
    type: testAction.failure,
    payload: {err}
});

export enum testAction {
    pending = "action/pending",
    success = "action/success",
    failure = "action/failure"
}
