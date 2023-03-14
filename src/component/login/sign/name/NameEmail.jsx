import React, { memo, useState } from "react";
import { sign } from "../../../../class/TbMembLogin";


export default function NameEmail() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
       
    
        const InputHandler = (e) => {
            console.log(sign.TbmembSign.membNm);
            console.log(sign.TbmembSign.membPwd);
            setName(
                e.target.value 
            );
            sign.TbmembSign.membNm = name;
            
    }
          const InputEmailHandler = (e) => {
            console.log(sign.TbmembSign.publicData.emailAddr);
            setEmail(
                e.target.value 
              );
              sign.TbmembSign.publicData.emailAddr = email;
    }
    
    
        return (
            <div>
                <input
                    type="text"
                    onChange={InputHandler}
                    placeholder="이름을 입력하세요"
                >
                </input>

                <input type="Email"
                    placeholder="Email"
                 onChange={InputEmailHandler}
                ></input>
                 {email.includes('@') && email.includes('.com') ? <p className="p-tag">가능합니다</p> : <p className="p-tag1">이메일 형식을 맞춰야 합니다.</p>}
             
            </div>
        );

};