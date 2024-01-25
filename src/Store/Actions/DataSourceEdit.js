import axios from "axios"

const DataSourceEditReq = (val) =>{
    return{
        type : 'DataSourceEditReq',
        payload : val
    }
}

const DataSourceEditSuccess = (val)=>{
    return{
        type :'DataSourceEditSuccess',
        payload:val,
    }
}

const DataSourceEditError = (val) =>{
    return {
        type :'DataSourceEditError',
        payload:val
    }
}

export const FetchDataSourceEditData = (id,token)=>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return(dispatch)=>{
        dispatch(DataSourceEditReq())
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getDsEditData?dsId=${id}`,{headers})
        .then((res)=>{
            dispatch(DataSourceEditSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(DataSourceEditError(err))
        })
    }
   
}