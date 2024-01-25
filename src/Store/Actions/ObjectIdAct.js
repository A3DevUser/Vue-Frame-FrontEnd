import axios from "axios";

const ObjectIdReq = (val) =>{
    return {
        type : 'ObjectIdReq',
        payload : val
    }
};

const ObjectIdSuccess = (val) =>{
    return {
        type : 'ObjectIdSuccess',
        payload : val
    }
};

const ObjectIdErr = (val) =>{
    return {
        type : 'ObjectIdErr',
        payload : val
    }
};

export const FetchObjectIdData = (FormId,token,rowId) =>{
    // console.log('SendObjectIdRed',FormId)
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ObjectIdReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/generateObjId?formId=${FormId}`, {headers})
        .then((res)=>{
            dispatch(ObjectIdSuccess({objId:res.data,rowId:rowId}))
        })
        .catch((err)=>{
            dispatch(ObjectIdErr(err))
        })
    }

}


