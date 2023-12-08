import axios from "axios";

const NavbarReq = (val) =>{
    return {
        type : 'NavbarReq',
        payload : val
    }
};

const NavbarSuccess = (val) =>{
    return {
        type : 'NavbarSuccess',
        payload : val
    }
};

const NavbarErr = (val) =>{
    return {
        type : 'NavbarErr',
        payload : val
    }
};

export const FetchNavbarData = (token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };

    return (dispatch)=>{
        dispatch(NavbarReq());
        // console.log('headers dispatch => ' + headers)
        axios.get(`http://localhost:8080/VF/getNavEle`,{headers})
        .then((res)=>{
            dispatch(NavbarSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(NavbarErr(err))
        })
    }

}


