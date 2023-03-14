import React, { Component, useEffect, useState } from "react";
import Terminal from "../../../axios/Terminal";
import { sign } from "../../../../class/TbMembLogin";
export default function SignUpInput() {

  const [check, setCheck] = useState(false);
  
  const SignUp = async () => {
    console.log(sign.TbmembSign);
      await Terminal.insertUser(sign.TbmembSign).then((res) => {
        res.status === 200 ? alert("성공") : alert("실패");
        
      }).catch((err) => {
          
        })
    }

  return (
          <div>
                        <input type="button" value="회원가입 버튼" className="submits-button"  onClick={SignUp}  />                    
          </div>
    );
  }

//