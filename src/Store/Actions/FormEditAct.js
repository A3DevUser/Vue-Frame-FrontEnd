import axios from "axios"

const FormEditReq = (val) =>{
    return{
        type : 'FormEditReq',
        payload : val
    }
}

const FormEditSuccess = (val)=>{
    return{
        type :'FormEditSuccess',
        payload:val,
    }
}

const FormEditError = (val) =>{
    return {
        type :'FormEditError',
        payload:val
    }
}

export const FetchFormEditData = (formId,token)=>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return(dispatch)=>{
        dispatch(FormEditReq())
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getConfigData?formId=${formId}`,{headers})
        .then((res)=>{
            dispatch(FormEditSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(FormEditError(err))
        })
    }
   
}