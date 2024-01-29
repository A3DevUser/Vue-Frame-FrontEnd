import axios from "axios";

const DropValSecReq = (val) =>{
    return {
        type : 'DropValSecReq',
        payload : val
    }
};

const DropValSecSuccess = (val) =>{
    return {
        type : 'DropValSecSuccess',
        payload : val
    }
};

const DropValSecErr = (val) =>{
    return {
        type : 'DropValSecErr',
        payload : val
    }
};

export const FetchDropValSecData = (DropData,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(DropValSecReq());
        axios.get(`http://localhost:8080/VF/DropDataColData?jsonDrop=${DropData}`,{headers})
        .then((res)=>{
            dispatch(DropValSecSuccess(res.data))
            // console.log("FinalApival",res.data)
        })
        .catch((err)=>{
            dispatch(DropValSecErr(err))
        })
    }

}


