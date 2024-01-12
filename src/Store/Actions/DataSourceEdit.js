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
        axios.get(`http://localhost:8080/VF/getDsEditData?dsId=${id}`,{headers})
        .then((res)=>{
            dispatch(DataSourceEditSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(DataSourceEditError(err))
        })
    }
   
}