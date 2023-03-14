

import React, { memo, useState } from "react";
import { sign } from "../../../../class/TbMembLogin";
import Terminal from "../../../axios/Terminal";


export default function PasswordInput() {
    const [pwd, setPwd] = useState("");
    const [checkPwd, setCheckPwd] = useState("");
    
       
    
    const InputHandler = ((e) => {
        // console.log(pwd);
          
        
        setPwd(
            e.target.value
        );
        sign.TbmembSign.membPwd = pwd; 
        console.log("비밀번호");
        console.log(sign.TbmembSign.membPwd);
            
    });
          const InputCheckHandler = (e) => {
            console.log(pwd);
            setCheckPwd(
                e.target.value 
              );
              if (checkPwd === pwd) {
                  
              }
    }
    
    
        return (
            <div>
                <input
                    type="password"
                    onChange={InputHandler}
                    placeholder="비밀번호를 입력하세요 (*) - 필수"
                >
                </input>
                {pwd.length >= 8 ? <p className="p-tag">가능합니다</p> : <p className="p-tag1">8글자 이상이어야 합니다.</p> }
                <input type="password"
                    placeholder="비밀번호 확인"
                 onChange={InputCheckHandler}
                ></input>
                {pwd.length >= 8 && pwd === checkPwd ? <p className="p-tag">비밀번호가 같습니다.</p> : <p className="p-tag1">비밀번호가 같아야 합니다.</p> }

            </div>
        );

};