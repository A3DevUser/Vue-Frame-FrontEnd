import axios from "axios";

const MultiModalColRowReq = (val) =>{
    return {
        type : 'MultiModalColRowReq',
        payload : val
    }
};

const MultiModalColRowSuccess = (val) =>{
    return {
        type : 'MultiModalColRowSuccess',
        payload : val 
    }
};

const MultiModalColRowErr = (val) =>{
    return {
        type : 'MultiModalColRowErr',
        payload : val
    }
};

export const FetchMultiModalColRowData = (gridId,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(MultiModalColRowReq());
        axios.get(`http://localhost:8080/VF/getMultiData?gridId=${gridId}`, {headers})
        .then((res)=>{
            dispatch(MultiModalColRowSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(MultiModalColRowErr(err))
        })
    }
}


