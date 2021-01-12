interface IUser{
    id:number,
    body:string,
    title:string,
    type: string,
    payload: object 

}
type initialState={
    type:string
}

type UserAction={
    type:string,
    action:string,
    user:IUser
}
type DispatchType=(args:UserAction)=>UserAction