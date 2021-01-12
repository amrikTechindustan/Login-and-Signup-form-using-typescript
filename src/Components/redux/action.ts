import { SET_LOGIN_STATE, LOGIN_FAIL,SIGN_UP,SIGN_UP_FAIL } from './types'

export function login(token: string, payload: object) {

    return (dispatch: Function) => {
        dispatch({
            type: SET_LOGIN_STATE
        });

        return new Promise<object>((resolve, reject) => {
            apiHit(token, payload).then((res: any) => {
                dispatch({
                    type: SET_LOGIN_STATE,
                    payload: res
                });

                return resolve(res);
            })
                .catch((err: any) => {
                    dispatch({
                        type: LOGIN_FAIL
                    });

                    return reject(err);
                })
        }
        )
    }
}
export function signup(token:string,payload:object){
return (dispatch:Function)=>{
    dispatch({
        type:SIGN_UP
    });
    return new Promise<object>((resolve,reject)=>{
        apiHit(token,payload).then((res:any)=>{
            dispatch({
                type:SIGN_UP,
                payload:res
            })
            return resolve(res)
        })
        .catch((err:any)=>{
            dispatch({
                type:SIGN_UP_FAIL
            })
            return reject(err)
        })
    })
}


}

function apiHit<Promise>(token: string, payload: object) {
    return new Promise((res, rej) => {

    });
}