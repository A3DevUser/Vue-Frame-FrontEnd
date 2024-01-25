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
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getNavEle`,{headers})
        .then((res)=>{
            dispatch(NavbarSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(NavbarErr(err))
        })
    }

}


