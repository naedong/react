import { async } from "@firebase/util";
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { logins } from "../../../class/TbMembLogin";
import Terminal from "../../axios/Terminal";
import { getConnetIp } from "../../axios/Ternel";
import Button from "./Button";

import "./Login.css";


function InputLogin(props) {
  const [ip, setIp] = useState("");

  const [change, setChange] = useState(false);
  const [input, setInput] = useState({
    id: "",
    pwd: "",
  });
  
  const consol = console.log(props);


  const InputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
   };
  console.log(`id => ${input.id}`);
  console.log(`pwd => ${input.pwd}`);

  useEffect( async () => {
    const getp = await (await getConnetIp()).json();
    console.log(getp.IPv4);
    logins.TbMembLoginHst.connectIp = getp.IPv4;
    console.log(logins.TbMembLoginHst.connectIp);
  }, []);

  const handleAbleButton = useEffect(() => {
      setChange(input.id.includes('@') && input.pwd.length >= 7);
  }, [input]);
  console.log(change);

  return (
          <div>
                  <h2>LOGIN</h2>
                        <input type="text" className='id' name="id"  onChange={(e) => InputHandler(e)} onClick={consol}   placeholder="I D" />
                        <input type="password" name="pwd" onChange={(e) => InputHandler(e)}  className="pwd" placeholder="Password" />
                        <Button
        idValue={input.id}
        pwdValue={input.pwd}
        changeColor={change}
        validate={handleAbleButton }
      >
                            </Button>
          </div>
    );
  }

//
export default InputLogin;