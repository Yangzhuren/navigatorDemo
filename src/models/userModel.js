import {createAction} from '../actions';

export default {
    // model 的标识
    namespace:'user',
    // 初始state
    state:{
        userInfo:{isLoggedIn:'false',user:'null',status:'null'},
    },
    // reduce
    reducers:{
        getUserInfo(state,{payload}){
            return {...state,...payload};
        }
    },
    // action
    effects:{
        * userChanged({payload},{call,put}){
            yield put(
                createAction('getUserInfo')({
                    userInfo:payload
                })
            );
        }
    }
};