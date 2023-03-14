import axios from "axios";
import React, { useEffect, useState } from "react";
import { instance } from "../../axios/CustomInstance";
import Terminal from "../../axios/Terminal";

const CheckId = (props) => {

  const [idCheck, setIdCheck] = useState({
        show:false,
        check:true
  });
  
    // ,{params:{membId:""}}
      const checkInputId = async () => {
        console.log("user.membId"); 

      
          await Terminal.get('login/checkid', {
            params: {
              tbMembLogin: "",
          }
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was Not Ok');
          })
          .then((data) => {
            console.log("test");
            
            
            console.log(props.email)
            if(data.data === 1){
                setIdCheck({ show: true, check: false });
                  console.log(props.email)
            }else{
                setIdCheck({ show: true, check: true });
                  console.log(props.email)
            }
        })
    }


    return (<input type='button'
        value='아이디 확인' 
        onChange={idCheck}
        onClick={() => checkInputId(props)}>
        


    </input>);
}

export default CheckId;