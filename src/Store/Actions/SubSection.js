import axios from "axios";

const SubSectionReq = (val) =>{
    return {
        type : 'SubSectionReq',
        payload : val
    }
};

const SubSectionSuccess = (val) =>{
    return {
        type : 'SubSectionSuccess',
        payload : val
    }
};

const SubSectionErr = (val) =>{
    return {
        type : 'SubSectionErr',
        payload : val
    }
};

export const FetchSubSectionData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(SubSectionReq());
        axios.get(`http://localhost:8080/VF/getSubSection?formId=${id}`,{headers})
        .then((res)=>{
            dispatch(SubSectionSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(SubSectionErr(err))
        })
    }

}


