import axios from "axios";

const ActionReq = (val) =>{
    return {
        type : 'ActionReq',
        payload : val
    }
};

const ActionSuccess = (val) =>{
    return {
        type : 'ActionSuccess',
        payload : val
    }
};

const ActionErr = (val) =>{
    return {
        type : 'ActionErr',
        payload : val
    }
};

export const FetchActionData = (userId,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` ,
      };
    return (dispatch)=>{
        dispatch(ActionReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getActions?currUser=${userId}`,{headers})
        .then((res)=>{
            dispatch(ActionSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ActionErr(err))
        })
    }

}


