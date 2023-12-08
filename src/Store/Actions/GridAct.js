import axios from "axios";

const GridReq = (val) =>{
    return {
        type : 'GridReq',
        payload : val
    }
};

const GridSuccess = (val) =>{
    return {
        type : 'GridSuccess',
        payload : val
    }
};

const GridErr = (val) =>{
    return {
        type : 'GridErr',
        payload : val
    }
};

export const FetchGridData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    //   console.log(id)
    //   console.log(headers)
    return (dispatch)=>{
        dispatch(GridReq());
        axios.get(`http://localhost:8080/VF/getByGrid?formId=${id}`,{headers})
        .then((res)=>{
            dispatch(GridSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(GridErr(err))
        })
    }

}


