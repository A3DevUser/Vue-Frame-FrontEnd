import axios from "axios";

const EditableCellGidFidDBvalReq = (val) =>{
    return {
        type : 'EditableCellGidFidDBvalReq',
        payload : val
    }
};

const EditableCellGidFidDBvalSuccess = (val) =>{
    return {
        type : 'EditableCellGidFidDBvalSuccess',
        payload : val 
    }
};

const EditableCellGidFidDBvalErr = (val) =>{
    return {
        type : 'EditableCellGidFidDBvalErr',
        payload : val
    }
};

export const EditableCellGidFidDBvalData = (token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(EditableCellGidFidDBvalReq());
        axios.get(`http://localhost:8080/VF/getEditableGidFormId`,{headers})
        .then((res)=>{
            dispatch(EditableCellGidFidDBvalSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(EditableCellGidFidDBvalErr(err))
        })
    }
}


