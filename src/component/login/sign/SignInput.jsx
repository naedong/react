
import { async } from "@firebase/util";
import React, { memo, useState } from "react";
import { sign } from "../../../class/TbMembLogin";
import Terminal from "../../axios/Terminal";
import './SignInputCss.css';

export default function SignInput() {
const [id, setId] = useState("");
    const [ptag, setPtag] = useState(false);
    
    const CheckHandler = async () => {
        console.log();
        await Terminal.checkUser(id)
            .then((res) => {
                console.log(res.data);
                if (res.data === false) {
                    sign.TbmembSign.membId = id;
                    alert("정상입니다.");
                }        
                else {
                    alert("이미 있는 아이디입니다");
                }
            
            })
            .catch((err) => {
            
        })
    }

    const ShowPtag = () => {
        // setPtag(
        //     ...ptag,
        //     ptag !== false ? ptag = true : ptag = false
        // );
        console.log(ptag);
    }
    
    const InputHandler = (e) => {
        console.log(id);
        setId(
            e.target.value
        );
    }
    
    return (
        <div>
           
            <input
                type="text"
                onChange={InputHandler}
                placeholder="아이디를 입력하세요"
                onClick={ShowPtag}
            >
              </input>  
               
            <input type="button"
                value="아이디 확인"
                onClick={CheckHandler}
                ></input>

        </div>           
    );
};