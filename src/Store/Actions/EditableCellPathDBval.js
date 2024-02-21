import axios from "axios";

const EditableCellPathDBvalReq = (val) =>{
    return {
        type : 'EditableCellPathDBvalReq',
        payload : val
    }
};

const EditableCellPathDBvalSuccess = (val) =>{
    return {
        type : 'EditableCellPathDBvalSuccess',
        payload : val 
    }
};

const EditableCellPathDBvalErr = (val) =>{
    return {
        type : 'EditableCellPathDBvalErr',
        payload : val
    }
};

export const EditableCellPathDBvalData = (token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(EditableCellPathDBvalReq());
        axios.get(`http://localhost:8080/VF/getEditableCellPath`,{headers})
        .then((res)=>{
            dispatch(EditableCellPathDBvalSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(EditableCellPathDBvalErr(err))
        })
    }
}


