import { SET_LOGIN_STATE,SIGN_UP} from './types'
export const initialState = {
    isLoggedIn: false,
    isSignup:false,
    userId: '',
    token: '',
    refreshToken: '',
    expiresOn: '',
    data: '',
}

type actionType = {
    type: string,
    payload: object
}

export const loginReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case SET_LOGIN_STATE:
            return {
                ...state,
                ...action.payload,
                isLoggedIn: true,
            };
        default:
            return state;
    }
};
export const signupReducer=(state=initialState,action:actionType)=>{
    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
                ...action.payload,
                isSignup:true
            }
    }
}