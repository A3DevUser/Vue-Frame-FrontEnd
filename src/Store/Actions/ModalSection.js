import axios from "axios";

const ModalSectionReq = (val) =>{
    return {
        type : 'ModalSectionReq',
        payload : val
    }
};

const ModalSectionSuccess = (val) =>{
    return {
        type : 'ModalSectionSuccess',
        payload : val
    }
};

const ModalSectionErr = (val) =>{
    return {
        type : 'ModalSectionErr',
        payload : val
    }
};


export const FetchModalSectionData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ModalSectionReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getSection?formId=${id}`,{headers})
        .then((res)=>{
            dispatch(ModalSectionSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ModalSectionErr(err))
        })
    }

}


