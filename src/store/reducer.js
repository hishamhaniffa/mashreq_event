export const initialState = {
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null
}

export const UPDATE_SCORE ='UPDATE_SCORE'
export const RESET_SCORE = 'RESET_SCORE';

export default  (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SCORE':
            return { ...state, ...action.payload};
        case 'RESET_SCORE':
            return initialState;
        default:
            return state;
    }
}