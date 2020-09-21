
import axios from 'axios';
import * as actionTypes from './types';
import qs from "qs";

//import { url } from '../../utils/config';
const url = "https://9aa6c71cc3c0.ngrok.io";


export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};


export const loginUser = (signInData) => (dispatch) => {
  axios
    .post(`${url}/api/login`, signInData)
    .then(({ data, status }) => {
      if (status === 200) {
        dispatch(authSuccess(data.token, data.userId));
        //dispatch(redirect("/home"));
      }
    })
    .catch((err) => {
      if (err.response.status === 401 || err.response.status === 400) {
        dispatch({
          type: authFail,
          payload: err.response.data,
        });
      }
    });
};


//REGISTER
export const registerUser = (data, history) => async (dispatch) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var urlencoded = new URLSearchParams();
  urlencoded.append("name", data.name);
  urlencoded.append("companyName", data.companyName);
  urlencoded.append("phone", data.phone);
  urlencoded.append("password", data.password);
  
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  let register_url = url+'/api/user/register/'+data.userId
  fetch(register_url, requestOptions)
    .then(response => response.text())
    .then(result =>{ 

     let response = JSON.parse(result);
     console.log(response.statusCode)
     if (response.statusCode == 201){
      dispatch({
                type: actionTypes.USER_REGISTER,
                payload: response
              });
            dispatch(authSuccess(response.token,response.userId))
            // dispatch(redirect('/dashboard'));
                  history.push({ pathname: `/dashboard` });

     }
     history.push({ pathname: `/dashboard` });

      console.log(response)
      
    })
    .catch(error => console.log('error', error));
  }

//CHECK EMAIL
export const userEmail = (data, history) => async (dispatch) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  var urlencoded = new URLSearchParams();
  urlencoded.append("email", data);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  await fetch("https://9aa6c71cc3c0.ngrok.io/api/user/checkEmail", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(JSON.parse(result))
      let response = JSON.parse(result)
      if (response.statusCode === 201) {
        dispatch({
          type: actionTypes.USER_EMAIL,
          payload: response
        })
        if (response.user || response.userName == null) {
          history.push({ pathname: `/register` })
        }
        else {
          history.push({ pathname: `/password` })
        }

      }
      else if (response.statusCode === 200){
        history.push({ pathname: `/password` })

      }
    }
    )
    
    .catch(error => console.log('error', error));

}

// export const userEmail = (email,history) => (dispatch) => {
//   axios({
//     method: 'post',
//     url: url + '/api/user/checkEmail',
//     data: qs.stringify({
//       email: email,
//     }),
//     headers: {
//       'content-type': 'application/x-www-form-urlendcoded;charset=utf-8'
//     }
//   })
//   .then(response => response.text())
//   .then(result => {
//   console.log(JSON.parse(result))
//   let response = JSON.parse(result)
//   if (response.statusCode === 201) {
//     console.log("response")
//     history.push({ pathname: `/register` })
//     dispatch({
//       type: actionTypes.USER_EMAIL,
//       payload: response.email
//     })
//   }
//   else {
//     console.log("bndmd")
//     history.push({ pathname: `/password` })
//   }
//       }
//       )
//       .catch(error => console.log('error', error));

//   }
