import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import './Button.css';
import axios from "axios";
import { logins } from "../../../class/TbMembLogin";



// import Disable from "./Disable";
function Button(props) {
    console.log(props.chngeColor);
    function click() {
    }
    
    const headers = {
        'Content-Type': 'application/json',
    }
    const [loginChk, setLoginChk] = useState();
    const getLogin =  () => {
       const tbMembLogin = {
        membId: "",
           membPwd: "",
        connectIp :""
    }
        const location = useLocation();
        useEffect(() => {
  console.log(location);
}, [ location ])

    tbMembLogin.membId = props.idValue;
    tbMembLogin.membPwd = props.pwdValue;
        tbMembLogin.connectIp = logins.TbMembLoginHst.connectIp;    
        console.log(tbMembLogin);
        axios.post('http://localhost:8888/login/login',  JSON.stringify(tbMembLogin) ,{
            headers:headers
        })
          // Terminal.loginUser(JSON.stringify(tbMembLogin))
        // axios.post('http://localhost:8080/login/logins', user)
       // instance.post('/login/login', 
     //    JSON.stringify(user)
                
                   
       // )
        .then((response) => {
                console.log(response.data);
                if (response.status === 400) {
                    console.log(response.status);
                }
            if (response.status === 200) {
                console.log(response.data);
                // 데이터가 널 조건만 넣으면 로그인 기능은 완성 
                localStorage.setItem("user", response.data.membNm);
                localStorage.setItem("id",response.data.membId);
                alert(localStorage.getItem("user")+" 님 환영합니다.");
                 return window.location.replace('http://localhost:3000/charge');
                
            }
            if (response.status === 204) {
                alert("일치하는 데이터가 없습니다.");
            }
            response.data != null ? setLoginChk(true) : setLoginChk(false);    
            }).catch((error) => {
                console.log(error);
                if (error.response) {
                    console.log(error.response);
                    console.log("리스폰스 에러");
                    console.log(error.response.data);
                    console.log(error.response.status);
                      console.log(error.response.headers);

                }
                else if (error.request) {
                    console.log(error.request);
                    console.log("리퀘스트 에러");
                    
                }
                else if (error.message) {
                    console.log(error.message);
                    console.log("message 에러");
                    
                }
                
            });
    };
   

//     useEffect( function fomdata() {
//         fetch('https://ipinfo.io/json').then((res) => { console.log(res.data) }).catch((err) => { });
//     }, []
// );
    


    console.log(props.changeColor);
    
    return (
        <button
            className={props.changeColor ? 'changeColorBtn' : 'loginBtn'}
            onClick={getLogin} >   
        로그인  {loginChk}
    </button>);
}
export default Button;